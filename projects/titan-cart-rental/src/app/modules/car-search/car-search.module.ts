import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarSearchRoutingModule } from './car-search-routing.module';
import { CarSearchComponent } from './car-search.component';
import { CardCarComponent } from './components/card-car/card-car.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [CarSearchComponent, CardCarComponent],
  imports: [
    CommonModule,
    CarSearchRoutingModule,
    NgxSkeletonLoaderModule,
  ]
})
export class CarSearchModule { }
