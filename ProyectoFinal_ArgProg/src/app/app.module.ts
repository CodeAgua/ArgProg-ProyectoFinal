import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    NgCircleProgressModule.forRoot({
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
