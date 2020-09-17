import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    path: 'cars-search',
    loadChildren: () => import('./modules/car-search/car-search.module').then(m => m.CarSearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
