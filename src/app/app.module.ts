import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTING } from './app.routes';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TalleresComponent } from './components/talleres/talleres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { SedesComponent } from './components/sedes/sedes.component';
import { HorariosComponent } from './components/horarios/horarios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    NavbarComponent,
    HomeComponent,
    TalleresComponent,
    SedesComponent,
    HorariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    AuthGuard
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
