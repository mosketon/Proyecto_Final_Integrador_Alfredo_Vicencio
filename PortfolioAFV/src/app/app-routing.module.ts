import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path: "body", component:BodyComponent, canActivate:[GuardGuard]},
  {path: "iniciar-sesion", component:IniciarSesionComponent},
  {path:"",redirectTo:'iniciar-sesion',pathMatch:'full' }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
