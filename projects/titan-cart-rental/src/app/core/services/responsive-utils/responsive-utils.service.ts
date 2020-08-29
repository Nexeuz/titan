import { Injectable } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveUtilsService {

  get smMin(): boolean {
    return  this.breakpointObserver.isMatched('(min-width: 599px)');
  }

  get mdMin(): boolean {
    return  this.breakpointObserver.isMatched('(min-width: 599px)');
  }

  get lgMin(): boolean {
    return  this.breakpointObserver.isMatched('(min-width: 599px)');
  }
  get xlMin(): boolean {
    return  this.breakpointObserver.isMatched('(min-width: 599px)');
  }

  constructor(private breakpointObserver: BreakpointObserver) { }
}
