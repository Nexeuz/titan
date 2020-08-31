import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    component: AppComponent,
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
