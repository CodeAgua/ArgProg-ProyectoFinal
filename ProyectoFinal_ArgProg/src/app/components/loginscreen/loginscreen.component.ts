import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/authentication.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})

export class LoginscreenComponent implements OnInit {
  
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  email!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;
  form:FormGroup;
  constructor(private tokenService: TokenService, private authService: AuthService,
    private formBuilder:FormBuilder, private usuarioService:UsuarioService, private router:Router) {
      this.form=this.formBuilder.group(
        {
          email:['',[Validators.required, Validators.email]],
          password:['',[Validators.required, Validators.minLength(8)]],
        }
      )
    }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.email, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setEmail(data.email);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      })
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
    this.authService.login(this.form.value).subscribe(data=>{
      console.log("DATA " + JSON.stringify(data));
      this.router.navigate(['/portfolio']);
    })
  }

}