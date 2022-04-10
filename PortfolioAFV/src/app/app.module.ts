import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { RedesComponent } from './components/redes/redes.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
<<<<<<< HEAD
=======
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
>>>>>>> Acerca-De

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LogoAPComponent,
    RedesComponent,
    LoginComponent,
<<<<<<< HEAD
    BannerComponent
=======
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent
>>>>>>> Acerca-De
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
