import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  galleryCollection;
  
  constructor(private afStorage: AngularFireStorage, private afs: AngularFirestore) { }

  
  ngOnInit(): void {
  }

  
    upload(event) {
      const randomId = Math.random().toString(36).substring(2);
      const file = event.target.files[0];
      const filePath = `gallery/${randomId}`;
      const fileRef = this.afStorage.ref(filePath)
      const task = this.afStorage.upload(filePath, file);

       // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            this.afs.collection('gallery').add({imageUrl: url})
          })
         } )
     )
    .subscribe()
    }

}
