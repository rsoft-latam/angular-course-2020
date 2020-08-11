import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';

  sw = true;

  persons = ['marco', 'maria', 'jorge', 'lupe']


  aux = 3;


  auxColor = 'red';

  auxClass = true;

  ngOnInit(){

  }

}
