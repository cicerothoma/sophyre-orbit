import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { IGallery } from 'src/app/services/interface/item';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getItems().subscribe(value => {
      console.log(value)
      this.items = value;
      console.log(this.items)
    })
  }

}
