import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CinesComponent } from './components/cines/cines.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { PeliculaRegistroComponent } from './components/pelicula-registro/pelicula-registro.component';

const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'pelicula', component: PeliculaComponent},
  {'path': 'detallePelicula', component: DetallePeliculaComponent},
  {'path': 'cines', component: CinesComponent},
  {'path': 'pelicula', component: PeliculaComponent},
  {'path': 'pelicula-registro', component: PeliculaRegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
