import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarSearchRoutingModule } from './car-search-routing.module';
import { CarSearchComponent } from './car-search.component';
import { CardCarComponent } from './components/card-car/card-car.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardCarSkeletonComponent } from './components/card-car-skeleton/card-car-skeleton.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbRadioModule} from '@nebular/theme';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { CarGalleryComponent } from './components/car-gallery/car-gallery.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import {SharedModule} from '../../shared/shared.module';
import { CarDetailAddonsComponent } from './components/car-detail-addons/car-detail-addons.component';
import { CarDetailInsuranceComponent } from './components/car-detail-insurance/car-detail-insurance.component';


@NgModule({
  declarations: [CarSearchComponent, CardCarComponent, CardCarSkeletonComponent, CarDetailComponent, CarGalleryComponent, CarListComponent, CarDetailAddonsComponent, CarDetailInsuranceComponent],
    imports: [
        CommonModule,
        CarSearchRoutingModule,
        NgxSkeletonLoaderModule,
        NbCardModule,
        NbButtonModule,
        SharedModule,
        NbIconModule,
        NbListModule,
        NbRadioModule,
    ]
})
export class CarSearchModule { }
