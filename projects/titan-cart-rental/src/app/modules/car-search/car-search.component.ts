import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'titan-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss']
})
export class CarSearchComponent implements OnInit {

  constructor(private router: Router) {
    console.log(this.router.url)
  }

  ngOnInit(): void {
  }

}
