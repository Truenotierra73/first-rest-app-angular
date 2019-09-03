import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { DetalleUsuarioComponent } from './components/user/detalle-usuario.component';
import { PaginadorComponent } from './components/paginador/paginador.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// Rutas
import { AppRoutingModule } from './app.routes';

// Http Client
import { HttpClientModule } from '@angular/common/http';

// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercaDeComponent,
    InicioComponent,
    ContactanosComponent,
    DetalleUsuarioComponent,
    PaginadorComponent,
    LoadingComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
