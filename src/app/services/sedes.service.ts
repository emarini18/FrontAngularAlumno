import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SedesService {

  // private url = 'https://api-alumnoucv.herokuapp.com/sedes';
  private url = 'http://localhost:8080/sedes';

  constructor( private http:HttpClient) {}


  getAllSedes(){
    return this.http.get(`${this.url}`);
  }
}
