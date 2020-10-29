import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  // private url = 'https://api-alumnoucv.herokuapp.com/sedes';
  private url = 'http://localhost:8080/horarios';

  constructor( private http:HttpClient) {}


  getAllHorarios(){
    return this.http.get(`${this.url}`);
  }
}
