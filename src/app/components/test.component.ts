import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
SimpleChange
} from "@angular/core";

@Component({
  selector: "person",
  template: `
    <div style="border: 1px solid red;">
    <p>NAME: {{name}}</p>
     <p>NAME: {{lastName}}</p>
    </div>
  `
})

export class TestComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy {

//@Input() name:string;

intermedearia:string;
@Input()
  get name(){
   return this.intermedearia;
  }
  set name(name:string){
    this.intermedearia = 'AAAAAAAAAAAAAAAAAAAAAAA ' + name;
  }

@Input() lastName:string;
  constructor() {}

  ngOnInit() {
    console.log("ON INIT", this.name);
  }

  ngOnChanges(changes: SimpleChange) {
    
    if(changes && changes.lastName && changes.lastName.currentValue){
      console.log("ON CHANGES", changes.lastName.currentValue);
      const aux = 'AAAAAAAAAAAAAAAAAAAAAAA ' + changes.lastName.currentValue;
      this.lastName = aux;
    }

  }

  ngOnDestroy(){
    console.log("OnDestroy");

  }

}

