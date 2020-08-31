import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule, NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule
} from '@nebular/theme';
import {NbMomentDateModule} from '@nebular/moment';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import { SearchBarHomeMobileComponent } from './components/search-bar-home-mobile/search-bar-home-mobile.component';
import { SearchBarHomeDesktopComponent } from './components/search-bar-home-desktop/search-bar-home-desktop.component';



@NgModule({
  declarations: [SearchBarComponent, SearchBarHomeMobileComponent, SearchBarHomeDesktopComponent],
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
    NbAutocompleteModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbFormFieldModule
  ]
})
export class SharedModule { }
