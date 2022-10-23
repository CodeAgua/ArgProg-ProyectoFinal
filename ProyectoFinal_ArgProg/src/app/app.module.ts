import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { NgCircleProgressModule } from 'node_modules/ng-circle-progress/';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { interceptorProvider } from './servicios/interceptor-service';
import { NuevaExperienciaComponent } from './components/experience/nueva-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NuevaEducacionComponent } from './components/education/nueva-educacion.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditaboutComponent } from './components/about/editabout.component';
import { EditprojectComponent } from './components/projects/editproject.component';
import { NewprojectComponent } from './components/projects/newproject.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginscreenComponent,
    FooterComponent,
    PortfolioComponent,
    NuevaExperienciaComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    NuevaEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditBannerComponent,
    EditaboutComponent,
    EditprojectComponent,
    NewprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NgCircleProgressModule.forRoot({
    })

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
