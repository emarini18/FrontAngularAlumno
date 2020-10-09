import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { TalleresComponent } from './components/talleres/talleres.component';
import { AuthGuard } from './guards/auth.guard';


const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrarse', component: RegistrarseComponent },
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
    { path: 'taller', component: TalleresComponent },
    { path: 'sede', component: SedesComponent },
    { path: '**', pathMatch:'full', redirectTo: 'login' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

