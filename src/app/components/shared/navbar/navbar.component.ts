import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Materialize from 'materialize-css';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      // var options = {
      //    edge: 'right'
      // }
      var elems = document.querySelectorAll('.sidenav');
      var instances = Materialize.Sidenav.init(elems);
    });
  }

  logOut() {
    this.profileService.logOut();
  }

}
