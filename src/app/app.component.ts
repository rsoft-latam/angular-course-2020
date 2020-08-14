import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'curso-angular';


  name = 'ricardo';

  persons = [
    {
      name: 'ricardo',
      lastName: 'pari',
      age: 22,
      enable: true
    },
    {
      name: 'marco',
      lastName: 'marco',
      age: 22,
      enable: true
    },
    {
      name: 'maria',
      lastName: 'maria',
      age: 22,
      enable: false
    },
    {
      name: 'juan',
      lastName: 'juan',
      age: 22,
      enable: false
    }
  ]

  auxNumber: number = 3;
  auxExponent: number = 2;

  ngOnInit(){

  }

}
