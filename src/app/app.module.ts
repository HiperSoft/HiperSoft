import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { AppsComponent } from './component/apps/apps.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { InicioComponent } from './component/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    AppsComponent,
    NosotrosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
