import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import {AppRoutingModule} from './app-routing.module';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,

    MatSliderModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
