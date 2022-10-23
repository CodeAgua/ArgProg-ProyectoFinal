import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/servicios/projects.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proy: Projects[] = []

  constructor(
    private proyserv: ProjectsService,
    private tokenServ: TokenService
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();

    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyserv.lista().subscribe((data) => {
      this.proy = data;
    });
  }

  

  delete(id?: number) {
    if (id != undefined) {
      this.proyserv.delete(id).subscribe(
        (data) => {
          this.cargarProyecto();
        },
        (err) => {
          alert("No se pudo borrar el proyecto.");
        }
      );
    }
  }
}