import {
  Component,
  Input,
  OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "person",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() name: string;

  constructor() {}

  ngOnInit() {
    console.log("ON INIT");
  }

  ngOnChanges() {
    console.log("ON CHANGES");
  }

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
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }

  ngOnDestroy(){
    console.log("OnDestroy");

  }

}