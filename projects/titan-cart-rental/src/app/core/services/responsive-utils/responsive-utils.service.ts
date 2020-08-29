import { Injectable } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveUtilsService {

  constructor(private breakPointObserver: BreakpointObserver) { }
}
