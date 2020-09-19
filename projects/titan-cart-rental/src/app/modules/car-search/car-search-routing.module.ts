import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarSearchComponent} from './car-search.component';

const routes: Routes = [
  {
    path: ':city/:select/:bkdt/:from/:until',
    component: CarSearchComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarSearchRoutingModule { }
