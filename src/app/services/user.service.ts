import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<IUser>;
  users: Observable<IUser[]>;

  constructor(private afs: AngularFirestore) { 

    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('firstName', 'asc'))


    this.users = this.afs.collection('users').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IUser;
        const id = a.payload.doc.id;
        return {id, ...data}
      }))
    );
  }

  // Returns observable arrays with Users
  getUsers() {
    return this.users;
  }

  getUser(id) {
    return this.usersCollection.doc<IUser>(id).valueChanges();
  }

/**
 * Given a user object, update the user
 * @param user user object
 */
 public updateUser(user: IUser): Promise<void> {
   return this.usersCollection.doc(user.id).update(user);
 }

 addUser(user: IUser) {
 return this.usersCollection.add(user);
 }

  removeUser(id) {
    return this.usersCollection.doc(id).delete();
  }

}
