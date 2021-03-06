import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './utils.component.css']
})
export class LoginComponent {

  submitAttempt: boolean = false;

  constructor(private auth: AuthService,
    private router: Router,
    private fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  })


  login() {
    this.submitAttempt = true;
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      this.auth.login(email, password)
    };
    
    setTimeout(() => {
      this.submitAttempt = false;
    }, 10000)

  }

}
