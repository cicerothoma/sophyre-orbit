import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  galleryCollection;
  uploadItem: FormGroup;
  submitAttempt: boolean = false;
  
  constructor(private afStorage: AngularFireStorage, 
              private afs: AngularFirestore,
              private fb: FormBuilder,
              private galleryService: GalleryService) { }

  
  ngOnInit(): void {
    this.uploadItem = this.fb.group({
      itemName: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.compose([Validators.required])],
      file: ['', Validators.required],
      imageUrl: ['', Validators.required],
    })
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
          this.uploadItem.get('imageUrl').patchValue(url);
        })
        } )
    )
  .subscribe()
  }

  submitForm() {
    this.submitAttempt = true;
    if (this.uploadItem.valid) {
      //Todo: Send Data To FireBase
      console.log(this.uploadItem.value)
      this.galleryService.addItem(this.uploadItem.value).then(() => {
        alert('Success');
        this.uploadItem.reset({
          itemName: '',
          category: '',
          description: '',
          price: '',
          file: '',
          imageUrl: ''
        })
      }).catch((err) => {
        alert(err)
      })
    } else {
      alert('Form Not Valid')
    }
  }

}
