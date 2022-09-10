import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css'],
})
export class NuevaExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(exp).subscribe(
      (data) => {
        alert("Experiencia añadida correctamente.");
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert("No se pudo añadir la experiencia.");
        this.router.navigate(['/portfolio']);
      }
    );
  }
}
