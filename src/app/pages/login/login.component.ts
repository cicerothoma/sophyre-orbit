import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';


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
  }
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.user);
    this.auth.login(this.user.email, this.user.password)
  }
  

}
