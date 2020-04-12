import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmin: boolean = false;
  isLoggedIn;

  constructor(private auth: AuthService, public route: Router) { 
    if (this.auth.user) {
      console.log(this.auth.user)
    }
  }

  ngOnInit() {
  
  }


  logout(): void{
    this.auth.logout();
  }

 
}
