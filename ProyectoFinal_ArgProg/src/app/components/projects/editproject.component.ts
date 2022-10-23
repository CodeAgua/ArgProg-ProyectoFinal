import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/servicios/projects.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  proy: Projects = null;

  constructor(
    private projectsServ: ProjectsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.projectsServ.detail(id).subscribe(
      (data) => {
        this.proy = data;
      },
      (err) => {
        alert("No se pudo modificar el proyecto.");
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.projectsServ.update(id, this.proy).subscribe(
      (data) => {
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert("No se pudo modificar el proyecto.");
        this.router.navigate(['/portfolio']);
      }
    );
  }
}