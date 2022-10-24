import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/servicios/projects.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  tituloP: string = '';
  descripcionP: string = '';
  demoP: string = '';
  repoP: string = '';
  urlimagenP: string = '';

  constructor(
    private proyserv: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proy = new Projects(this.tituloP, this.descripcionP, this.demoP, this.repoP, this.urlimagenP);
    this.proyserv.save(proy).subscribe(
      (data) => {
        alert("Proyecto añadido correctamente.");
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert("No se pudo añadir el proyecto.");
        this.router.navigate(['/portfolio']);
      }
    );
  }
}

