import {
  Component,
  Input,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef
} from "@angular/core";

import { } from '@types/googlemaps';

@Component({
  selector: "person",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input() name: string = "Ricardo";

  @ViewChild("gmap", { static: false }) gmap: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log("DO CHECK");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");

    let map: google.maps.Map;
    map = new google.maps.Map(this.gmap.nativeElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }
}
