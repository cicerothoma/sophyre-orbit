import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAdmin: boolean = false;

  constructor(private auth: AuthService) { 
    if (this.auth.user) {
      this.isAdmin = true;
    }
  }

 
}
