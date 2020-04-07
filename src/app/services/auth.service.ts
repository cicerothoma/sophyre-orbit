import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }
  login (email, password) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => console.log('Logged In', this.afAuth.user))
      .catch((err) => console.log(err));
  }

  signUp (email, password) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
  }
}
