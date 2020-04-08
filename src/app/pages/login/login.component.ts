import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './utils.component.css']
})
export class LoginComponent {

  faUser = faUser;
  faKey = faKey;
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
    console.log(this.loginForm.controls.email.value, this.loginForm.controls.email.valid)
    console.log(this.loginForm.controls.password.value, this.loginForm.controls.password.valid)
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      this.auth.login(email, password)
      this.router.navigate(['/admin']);
    } else {
      alert('The Form is Invalid')
    }

  }

}
