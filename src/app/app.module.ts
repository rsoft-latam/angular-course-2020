import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import {AppRouting} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
