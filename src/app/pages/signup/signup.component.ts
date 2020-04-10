import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitAttempt: boolean = false;

  constructor(private fb: FormBuilder,
              private afs: AngularFirestore,
              private afAuth: AngularFireAuth,
              private router: Router) { }

  signUpForm = this.fb.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    gender: ['', Validators.required],
    role: ['', Validators.required],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
  userCollection = this.afs.collection('users');
  ngOnInit(): void {
  }


  signUp() {
    this.submitAttempt = true;
    if (this.signUpForm.valid) {
      const email: string = this.signUpForm.get('email').value;
      const password: string = this.signUpForm.get('password').value;
      console.log(email, password);
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
          this.signUpForm.get('id').patchValue(res.user.uid);
          this.userCollection.doc(res.user.uid).set(this.signUpForm.value);
          this.router.navigate(['/login']);
        })
        .catch((err) => {
          alert(err);
          this.submitAttempt = false;
        })
    } else {
      alert('The Form Is Not Valid')
    }
    
  }

}
