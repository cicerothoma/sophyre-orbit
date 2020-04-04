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
  }

  signUp (email, password) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
  }
}
