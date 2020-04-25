import { Component, OnInit } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBold } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCode = faCode;
  faBold = faBold;
  faCube = faCube
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faWhatsapp = faWhatsappSquare;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
