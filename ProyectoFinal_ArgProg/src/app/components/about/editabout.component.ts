import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.css']
})
export class EditaboutComponent implements OnInit {
  
  pers: persona = null;

  constructor(
    private personaServ: PersonaService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.personaServ.detail(id).subscribe(
      (data) => {
        this.pers = data;
      },
      (err) => {
        alert("No se pudo modificar la persona.");
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.personaServ.update(id, this.pers).subscribe(
      (data) => {
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert("No se pudo modificar la persona.");
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/portfolio'])
  }
}
