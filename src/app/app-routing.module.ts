import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CinesComponent } from './components/cines/cines.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PeliculaRegistroComponent } from './components/pelicula-registro/pelicula-registro.component';
import {ConsultarEntradasComponent} from './components/consultar-entradas/consultar-entradas.component';
import { DetalleCineComponent } from './components/detalle-cine/detalle-cine.component';

const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'pelicula', component: PeliculaComponent},
  {'path': 'detallePelicula/:id', component: DetallePeliculaComponent},
  {'path': 'cines', component: CinesComponent},
  {'path': 'pelicula', component: PeliculaComponent},
  {'path': 'login', component: LoginComponent},
  {'path': 'dashboard', component: DashboardComponent},
  {'path': 'pelicula-registro', component: PeliculaRegistroComponent},
  {'path': 'consultarEntradas/:id', component: ConsultarEntradasComponent},
  {'path': 'cines/:id', component: DetalleCineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
