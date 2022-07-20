import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { BodyComponent } from './components/body/body.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEspecializacionesComponent } from './components/especializaciones/edit-especializaciones.component';
import { NewEspecializacionesComponent } from './components/especializaciones/new-especializaciones.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades.component';
import { HeaderComponent } from './components/header/header.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';

const routes: Routes = [
  {path: "body", component:BodyComponent},
  {path: '', component:HeaderComponent},
  {path: "iniciar-sesion", component:IniciarSesionComponent},
  {path: "new-experiencia", component: NewExperienciaComponent},
  {path: "edit-experiencia/:id", component: EditExperienciaComponent},
  {path: "new-educacion", component: NewEducacionComponent},
  {path: "edit-educacion/:id", component: EditEducacionComponent},
  {path: "new-especializaciones", component:NewEspecializacionesComponent},
  {path: "edit-especializaciones/:id", component:EditEspecializacionesComponent},
  {path: "new-proyectos", component:NewProyectosComponent},
  {path: "edit-proyectos/:id", component:EditProyectosComponent},
  {path: "new-habilidades", component:NewHabilidadesComponent},
  {path: "edit-habilidades/:id", component:EditHabilidadesComponent},
  {path: "edit-acercaDe/:id", component:EditAcercaDeComponent},
  
  {path:"",redirectTo:'header',pathMatch:'full' }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
