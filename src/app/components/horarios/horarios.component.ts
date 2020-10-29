import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  constructor( private horarioService:HorarioService ) { }

  horarios: any = [];

  ngOnInit(): void {
  }

  async getAllHorarios() {
    this.horarioService.getAllHorarios()
      .subscribe(data => {
        this.horarios = data
        console.log(data);
      });

    const imprimir = await this.horarios;
    console.log(imprimir);
  }

}
