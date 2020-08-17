import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  constructor(el: ElementRef) { 

    console.log('ELEMENT REF: ', el);

    el.nativeElement.style.backgroundColor = 'yellow'; 

  }


}