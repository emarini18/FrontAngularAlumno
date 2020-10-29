import { Component, OnInit } from '@angular/core';
import { SedesService } from '../../services/sedes.service';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  constructor( private sedesService: SedesService ) { }
  // Arreglo con la lista de sedes
  sedes: any = [];

  ngOnInit(): void {
    this.getAllSedes();
  }

  async getAllSedes() {
    this.sedesService.getAllSedes()
      .subscribe(data => {
        this.sedes = data
        console.log(data);
      });

    const imprimir = await this.sedes;
    console.log(imprimir);
  }

}
