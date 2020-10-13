import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  forma: FormGroup;
  User: {};

  constructor(private profileService: ProfileService,
    private fb: FormBuilder,
    private router: Router) {

    this.crearFormulario();
  }

  ngOnInit(): void {
  }



  crearFormulario() {

    // nombre=['valor defecto', validacion sincrona, validacion asincrona]
    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', Validators.required],
      celular: ['', Validators.required]
    });

  }


  registrarse() {
    console.log(this.forma);
    console.log(this.forma.value);
    this.profileService.registrarse(this.forma.value)
      .subscribe(
        res => {
          console.log(res);
          // localStorage.setItem('token', res.token);
          this.profileService.loggedIn();
          this.router.navigate(['/home', res.id]);
        },
        err => console.log(err)
      )
  }

}
