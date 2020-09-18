import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarSearchRoutingModule } from './car-search-routing.module';
import { CarSearchComponent } from './car-search.component';
import { CardCarComponent } from './components/card-car/card-car.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardCarSkeletonComponent } from './components/card-car-skeleton/card-car-skeleton.component';
import {NbButtonModule, NbCardModule} from '@nebular/theme';


@NgModule({
  declarations: [CarSearchComponent, CardCarComponent, CardCarSkeletonComponent],
  imports: [
    CommonModule,
    CarSearchRoutingModule,
    NgxSkeletonLoaderModule,
    NbCardModule,
    NbButtonModule,
  ]
})
export class CarSearchModule { }
