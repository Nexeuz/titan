import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Car} from '../../../../core/mock/car';

@Component({
  selector: 'titan-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss'],
})
export class CardCarComponent implements OnInit {
  @Input() data: Car[];
  constructor() { }

  ngOnInit(): void {
  }

}
