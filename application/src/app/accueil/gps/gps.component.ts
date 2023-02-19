import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss']
})
export class GpsComponent {
  title = 'application';
  mapOptions: google.maps.MapOptions = {
    center: { lat: 33.589886, lng: -7.603869 },
    zoom : 14,
    
 }
 marker = {
    position: { lat: 33.589886, lng: -7.603869,
      map: Map,
      title: 'Hello World!',
      draggable: true,
      animation: window['google'].maps.Animation.DROP,
      
    },
 }
}
