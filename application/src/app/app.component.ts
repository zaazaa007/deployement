import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application';
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -7.6783124 },
    zoom : 14
 }
 marker = {
    position: { lat: 38.9987208, lng: -7.6783124 },
 }
}
