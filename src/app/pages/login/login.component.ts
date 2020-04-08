import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUser = faUser;
  faKey = faKey;
  user = {
    email: '',
    password: ''
  };
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.user);
    this.auth.login(this.user.email, this.user.password);
    this.router.navigate(['/admin']);
  }

}
