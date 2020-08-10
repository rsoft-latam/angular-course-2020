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
  template: `
    <div style="border: 1px solid red;">
    <p>TEST</p>
    <input type="text" [(ngModel)]="name">
    <p>VALOR VAR NAME: {{name}}</p>
    </div>
  `,
  styles: [
    `
    
    `
  ]
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