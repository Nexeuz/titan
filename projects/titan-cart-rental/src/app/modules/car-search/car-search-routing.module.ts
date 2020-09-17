import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarSearchComponent} from './car-search.component';

const routes: Routes = [
  {
    path: ':select/:bkdt/:city/:from/:until',
    component: CarSearchComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarSearchRoutingModule { }
