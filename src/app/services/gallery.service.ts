import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGallery } from './interface/item';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  galleryCollection: AngularFirestoreCollection<IGallery>;
  gallery: Observable<IGallery[]>;
  constructor(private afs: AngularFirestore) {
    this.galleryCollection = afs.collection('gallery');

    this.gallery = this.afs.collection('users').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IGallery;
        const id = a.payload.doc.id;
        return {id, ...data}
      }))
    );
   }

   // Returns an Observable Array of Items in the Gallery Collection
   getItems(){
     return this.gallery;
   }

   // Get a Specific Item In the the Gallery Collection
   getItem(id) {
     this.galleryCollection.doc(id).valueChanges()
   }

   // Add Item to the Collection
   addItem(item: IGallery) {
    return this.galleryCollection.add(item);
    }
   
    // Remove Item From The Collection
     removeItem(id) {
       return this.galleryCollection.doc(id).delete();
     }
  

}
