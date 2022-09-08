import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NuevaExperienciaComponent } from './components/experience/nueva-experiencia.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'login', component:LoginscreenComponent},
  {path: 'nuevaexp', component:NuevaExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: '', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
