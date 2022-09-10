import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  edu: Educacion[] = [];

  constructor(
    private educacionServ: EducacionService,
    private tokenServ: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionServ.lista().subscribe((data) => {
      this.edu = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionServ.delete(id).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          alert("No se pudo borrar la educación.");
        }
      );
    }
  }
}
