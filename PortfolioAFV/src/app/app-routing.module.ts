import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HeaderComponent } from './components/header/header.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path: "body", component:BodyComponent},
  {path: '', component:HeaderComponent},
  {path: "iniciar-sesion", component:IniciarSesionComponent},
  {path: "new-experiencia", component: NewExperienciaComponent},
  {path: "edit-experiencia/:id", component: EditExperienciaComponent},
  
  {path:"",redirectTo:'header',pathMatch:'full' }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
