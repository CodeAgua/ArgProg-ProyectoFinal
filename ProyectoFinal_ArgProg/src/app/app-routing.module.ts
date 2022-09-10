import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NuevaEducacionComponent } from './components/education/nueva-educacion.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NuevaExperienciaComponent } from './components/experience/nueva-experiencia.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'login', component:LoginscreenComponent},
  {path: 'nuevaexp', component:NuevaExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NuevaEducacionComponent},
  {path: 'editedu/:id', component:EditEducacionComponent},
  {path: '', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
