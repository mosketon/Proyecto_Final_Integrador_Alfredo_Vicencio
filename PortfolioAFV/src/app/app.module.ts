import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { RedesComponent } from './components/redes/redes.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HttpClientModule} from '@angular/common/http';

import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { EspecializacionesComponent } from './components/especializaciones/especializaciones.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './services/persona.service';
import { EducacionService } from './services/educacion.service';
import { EspecializacionesService } from './services/especializaciones.service';
import { ExperienciaService } from './services/experiencia.service';
import { HabilidadesService } from './services/habilidades.service';
import { ProyectosService } from './services/proyectos.service';
import { AutenticacionService } from './services/autenticacion.service';
import { TokenService } from './services/token.service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditEspecializacionesComponent } from './components/especializaciones/edit-especializaciones.component';
import { NewEspecializacionesComponent } from './components/especializaciones/new-especializaciones.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades.component';
import { interceptorProvider } from './services/interceptor-service';

//Material
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { materialize } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LogoAPComponent,
    RedesComponent,
    LoginComponent,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    EspecializacionesComponent,
    ProyectosComponent,
    GaleriaComponent,
    IniciarSesionComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditAcercaDeComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditEspecializacionesComponent,
    NewEspecializacionesComponent,
    NewProyectosComponent,
    EditProyectosComponent,
    EditHabilidadesComponent,
    NewHabilidadesComponent,
      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ PersonaService, EducacionService, EspecializacionesService, 
    ExperienciaService, HabilidadesService, ProyectosService, AutenticacionService,TokenService, interceptorProvider,
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
