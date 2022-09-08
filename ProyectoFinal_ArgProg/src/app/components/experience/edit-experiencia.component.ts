import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent implements OnInit {
  exp: Experiencia = null;

  constructor(
    private sExperiencia: SExperienciaService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      (data) => {
        this.exp = data;
      },
      (err) => {
        alert('No se pudo modificar la experiencia.');
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.sExperiencia.update(id, this.exp).subscribe(
      (data) => {
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert('No se pudo modificar la experiencia.');
        this.router.navigate(['/portfolio']);
      }
    );
  }
}
