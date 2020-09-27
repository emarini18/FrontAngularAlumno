import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup;

  constructor(private profileService: ProfileService,
    private fb: FormBuilder,
    private router: Router ) {

    this.crearFormulario();
  }

  ngOnInit(): void {
  }


  // Crear fromGroup
  crearFormulario() {
    this.userLogin = this.fb.group({
      username :['', Validators.required],
      password :['', Validators.required]
    });
  }

  login(){
    console.log(this.userLogin);
    console.log(this.userLogin.value);
    
    this.profileService.login( this.userLogin.value )
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token );
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err);
        }
      )
  }
}
