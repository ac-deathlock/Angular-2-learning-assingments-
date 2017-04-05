import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef : ElementRef, private render:Renderer) {
    this.elementRef.nativeElement.style.backgroundColor ='green';
   }

}
