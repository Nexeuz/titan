import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[titanSubtotalBody]',
  host: {
    style: 'display: flex; justify-content: space-between'
  }
})
export class SubtotalBodyDirective {

  constructor(public element: ElementRef<SubtotalBodyDirective>) {
  }
}
