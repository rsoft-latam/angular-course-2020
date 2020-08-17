import { Directive, ElementRef, Input, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input ('appNgColor') color: string;
  @Input () secondColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    console.log('MOUSE ENTER')
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMousdeLeave(){
    console.log('MOUSE LEAVE')
    this.changeColor(this.secondColor);
  }

  constructor(private el: ElementRef) { 

  }

  changeColor(color:string){
    this.el.nativeElement.style.backgroundColor = color; 
  }  

}