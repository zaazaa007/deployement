import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { GoogleMapsModule } from '@angular/google-maps/';
import {MatMenuModule} from '@angular/material/menu';
import { MatCarouselModule } from '@ngmodule/material-carousel';










import { AppComponent } from './app.component';
import { GpsComponent } from './accueil/gps/gps.component';
import { SliderComponent } from './accueil/slider/slider.component';
import { HomeComponent } from './accueil/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GpsComponent,
    SliderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    GoogleMapsModule,
    MatMenuModule,
    MatCarouselModule.forRoot(),


    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
