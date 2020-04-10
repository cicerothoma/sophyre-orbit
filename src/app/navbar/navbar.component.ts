import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private auth: AuthService, public route: Router) { 
    if (this.auth.user) {
      this.isLoggedIn = true;
    }
  }



  logout(): void{
    this.auth.logout();
  }

 
}
