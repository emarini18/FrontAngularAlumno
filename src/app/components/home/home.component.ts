import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.interface';
import { ProfileService } from 'src/app/services/profile.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  perfil:any = {};
  idUsuario:any;

  constructor( private profileService: ProfileService,
                private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.idUsuario= this.activateRoute.snapshot.params.id;
    this.getPerfil(this.idUsuario);
  }

  getPerfil(id){
    this.profileService.getPerfil(id)
      .subscribe(
        res => {
          console.log(res)
          this.perfil = res
        },
        err => console.log(err)
      )
  }
}
