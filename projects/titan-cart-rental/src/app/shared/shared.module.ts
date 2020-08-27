import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NbAutocompleteModule, NbDatepickerModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {NbMomentDateModule} from '@nebular/moment';



@NgModule({
  declarations: [SearchBarComponent],
  exports: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbMomentDateModule,
    NbInputModule,
    NbSelectModule,
    NbAutocompleteModule
  ]
})
export class SharedModule { }
