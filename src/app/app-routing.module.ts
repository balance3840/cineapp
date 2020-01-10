import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CinesComponent } from './components/cines/cines.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'cines', component: CinesComponent},
  {'path': 'pelicula', component: PeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
