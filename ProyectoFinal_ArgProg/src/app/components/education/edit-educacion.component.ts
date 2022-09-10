import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})
export class EditEducacionComponent implements OnInit {
  edu: Educacion = null;

  constructor(
    private educacionServ: EducacionService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.educacionServ.detail(id).subscribe(
      (data) => {
        this.edu = data;
      },
      (err) => {
        alert("No se pudo modificar la educación.");
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.educacionServ.update(id, this.edu).subscribe(
      (data) => {
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert("No se pudo modificar la educación.");
        this.router.navigate(['/portfolio']);
      }
    );
  }
}
