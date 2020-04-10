import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  login(email, password) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.user = user;
        this.router.navigate(['/admin'])
      })
      .catch((err) => console.log(err));
  }

  signUp(email, password) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Sign Up Success');
        console.log(res.user.uid);
      })
      .catch((err) => console.log(err));
  }

  logout() {
    this.afAuth.signOut();
  }
}
