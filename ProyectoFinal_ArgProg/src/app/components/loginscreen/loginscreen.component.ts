import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          deviceId:["17867868768"],
          deviceType:["DEVICE_TYPE_ANDROID"],
          notificationToken:["67657575eececc34"]
        })
      }
    )
  }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.form.get('email');
  }

  get Password()
  {
    return this.form.get('password');
  }

  onEnviar(event:Event) {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA " + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }

  
  /*
  ESTO ES PARA EL MODEL USUARIO
  export class usuario {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;

    constructor(nombre:String, apellido:String, img:String){
      this.nombre=nombre;
      this.apellido=apellido;
      this.img=img;
    }
    
    ESTO ES PARA EL SERVICE USUARIO
    url="http://localhost:8080/";
    
    constructor(private http:HttpClient) { }
    public verUsuarios(): Observable<usuario>{
       return this.http.get<usuario>(this.URL+ '/ver/usuarios');
    }
    */
}
