import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skill: Skills[] = [];

  constructor(
    private servskill: SkillsService,
    private tokenServ: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();

    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.servskill.lista().subscribe((data) => {
      this.skill = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.servskill.delete(id).subscribe(
        (data) => {
          this.cargarSkills();
        },
        (err) => {
          alert('No se pudo borrar la skill.');
        }
      );
    }
  }
}
