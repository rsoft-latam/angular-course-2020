import { Directive, ElementRef, Input, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @HostListener('mouseenter') onMouseEnter(){
    console.log('MOUSE ENTER')
    this.el.nativeElement.style.backgroundColor = 'yellow'; 
  }

  @HostListener('mouseleave') onMousdeLeave(){
    console.log('MOUSE LEAVE')
    this.changeColor('red');
  }

  constructor(private el: ElementRef) { 
    console.log('ELEMENT REF: ', el);
    this.changeColor('yellow');
  }

  changeColor(color:string){
    this.el.nativeElement.style.backgroundColor = color; 
  }  

}