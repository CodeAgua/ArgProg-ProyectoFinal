import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaboutComponent } from './components/about/editabout.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NuevaEducacionComponent } from './components/education/nueva-educacion.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NuevaExperienciaComponent } from './components/experience/nueva-experiencia.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditprojectComponent } from './components/projects/editproject.component';
import { NewprojectComponent } from './components/projects/newproject.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'login', component:LoginscreenComponent},
  {path: 'nuevaexp', component:NuevaExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NuevaEducacionComponent},
  {path: 'editedu/:id', component:EditEducacionComponent},
  {path: 'nuevaskill', component:NewSkillComponent},
  {path: 'editskill/:id', component:EditSkillComponent},
  {path: 'editbanner/:id', component:EditBannerComponent},
  {path: 'editabout/:id', component:EditaboutComponent},
  {path: 'newproject', component:NewprojectComponent},
  {path: 'editproject/:id', component:EditprojectComponent},
  {path: '', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
