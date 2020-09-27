import { Component, OnInit } from '@angular/core';
import { TallerService } from '../../services/taller.service';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  constructor(private tallerService: TallerService) { }

 // Arreglo con la lista de talleres
 talleres: any=[];

  ngOnInit(): void {
    this.getAllTalleres();
  }

  async getAllTalleres(){
    this.tallerService.getAllTalleres()
      .subscribe( data =>{
        this.talleres = data
        console.log(data);
      });

     const imprimir = await this.talleres
     console.log(imprimir);
  }

}
