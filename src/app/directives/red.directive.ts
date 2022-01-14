import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) { //injetando dependencias e referencia
    el.nativeElement.style.color = '#e35e6b'
  }
}
