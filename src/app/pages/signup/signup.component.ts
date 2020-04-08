import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import 'firebase/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private afs: AngularFirestore,
              private afCol: AngularFirestoreCollection,
              private auth: AuthService) { }

  signUpForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  ngOnInit(): void {
  }


  signUp() {
    const email: string = this.signUpForm.get('email').value;
    const password: string = this.signUpForm.get('password').value;
    console.log(email, password);
    this.auth.signUp(email, password);
    console.log(this.signUpForm.value);


  }

}
