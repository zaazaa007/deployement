import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides = [
    {'image': '/assets/img/logo.jpg'}, 
    {'image': 'assets/img/WhatsApp Image 2023-02-18 à 12.18.17.jpg'},
    {'image': 'assets/img/WhatsApp Image 2023-02-17 à 14.50.47.jpg'}, 
    {'image': 'assets/img/WhatsApp Image 2023-02-17 à 14.40.36.jpg'}, 
    {'image': 'assets/img/WhatsApp Image 2023-02-18 à 12.18.17.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
