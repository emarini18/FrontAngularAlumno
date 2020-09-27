import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Taller } from '../models/taller.interface';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TallerService {

  private url = 'http://localhost:3000/talleres'

  constructor( private http:HttpClient) {}


  getAllTalleres(){
    return this.http.get(`${this.url}/all`);
  }
}
