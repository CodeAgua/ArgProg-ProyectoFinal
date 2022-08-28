import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  usuario: usuario = new usuario("", "", "");
  
  constructor(public usuarioServ: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioServ.verUsuarios().subscribe(data => {this.usuario = data});
  }

}
