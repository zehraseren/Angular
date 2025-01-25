import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFirst]',
})
export class FirstDirective {
  constructor(private element: ElementRef) {}

  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
