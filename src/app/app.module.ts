import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { CinesComponent } from './components/cines/cines.component';
import { HttpClientModule } from '@angular/common/http'
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PeliculaRegistroComponent } from './components/pelicula-registro/pelicula-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculaFormDialogComponent } from './components/pelicula-form-dialog/pelicula-form-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetalleCineComponent } from './components/detalle-cine/detalle-cine.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PeliculaComponent,
    FooterComponent,
    SliderComponent,
    CinesComponent,
    DetallePeliculaComponent,
    LoginComponent,
    DashboardComponent,
    PeliculaRegistroComponent,
    PeliculaFormDialogComponent,
    DetalleCineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [PeliculaFormDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
