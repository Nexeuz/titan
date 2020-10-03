import {AfterContentInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[titanSubtotalHeader]'
})
export class SubtotalHeaderDirective implements AfterContentInit{
  @Input() last: boolean;

  constructor(public element: ElementRef<SubtotalHeaderDirective>,
              private renderer2: Renderer2) {
  }

  ngAfterContentInit(): void {
    if (!this.last) {
      this.renderer2.addClass(this.element.nativeElement, 'header-border-subtotal');
    }
  }


}
