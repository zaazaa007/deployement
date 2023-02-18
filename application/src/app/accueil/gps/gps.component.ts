import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss']
})
export class GpsComponent {
  title = 'application';
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -7.6783124 },
    zoom : 14
 }
 marker = {
    position: { lat: 38.9987208, lng: -7.6783124 },
 }
}
