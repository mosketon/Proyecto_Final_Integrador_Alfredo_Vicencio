import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path: "body", component:BodyComponent},
  {path: "header", component:HeaderComponent},
  {path: "iniciar-sesion", component:IniciarSesionComponent},
  
  {path:"",redirectTo:'header',pathMatch:'full' }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
