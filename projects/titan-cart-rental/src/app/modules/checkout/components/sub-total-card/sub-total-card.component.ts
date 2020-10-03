import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren, ElementRef,
  OnInit, QueryList,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {SubtotalHeaderDirective} from '../../directives/subtotal-header.directive';

@Component({
  selector: 'titan-sub-total-card',
  templateUrl: './sub-total-card.component.html',
  styleUrls: ['./sub-total-card.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SubTotalCardComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChild(SubtotalHeaderDirective)
  headerDirective: SubtotalHeaderDirective;


  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }


  ngAfterContentInit(): void {


  }

  ngAfterViewInit(): void {

  }


}
