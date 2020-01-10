import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CinesComponent } from './components/cines/cines.component';


const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'cines', component: CinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
