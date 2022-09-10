import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  exp: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenServ: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    
    if(this.tokenServ.getToken()) {
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  cargarExperiencia():void {
    this.sExperiencia.lista().subscribe(data=> {this.exp = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia.");
        }
      )
    }
  }

}


