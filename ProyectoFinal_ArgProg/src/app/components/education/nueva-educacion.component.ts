import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css'],
})
export class NuevaEducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(
    private educacionServ: EducacionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const edu = new Educacion(this.nombreE, this.descripcionE);
    this.educacionServ.save(edu).subscribe(
      (data) => {
        alert("Educación añadida correctamente.");
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert("No se pudo añadir la educación.");
        this.router.navigate(['/portfolio']);
      }
    );
  }
}
