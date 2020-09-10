import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {car} from '../../core/mock/car';

@Component({
  selector: 'titan-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {

    data = car();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
