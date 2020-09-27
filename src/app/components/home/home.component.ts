import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.interface';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  perfil:any = {};

  constructor( private profileService: ProfileService ) { }

  ngOnInit(): void {

    this.getPerfil();
  }

  getPerfil(){
    this.profileService.getPerfil()
      .subscribe(
        res => {
          console.log(res)
          this.perfil = res
        },
        err => console.log(err)
      )
  }
}
