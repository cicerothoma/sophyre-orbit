import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
