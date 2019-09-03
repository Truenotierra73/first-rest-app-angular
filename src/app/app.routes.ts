import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { DetalleUsuarioComponent } from './components/user/detalle-usuario.component';

const ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'usuario/:userId', component: DetalleUsuarioComponent},
    { path: 'acerca-de', component: AcercaDeComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: '**', component: InicioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
