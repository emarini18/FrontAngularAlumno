import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../models/alumno.interface';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = 'http://localhost:3000/alumnos'

  constructor( 
    private http:HttpClient,
    private router: Router
    ) {}

  registrarse(user){
    return this.http.post<Alumno>(`${this.url}/registrar`, user);
  }

  login(user){
    return this.http.post<Alumno>(`${this.url}/login`, user);
  }
  
  loggedIn(): boolean{
    if(localStorage.getItem('token')){
      return true;
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getPerfil(){
    return this.http.get(` ${this.url}/profile`);
  }
}
