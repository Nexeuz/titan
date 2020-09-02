import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule, NbDialogModule, NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule
} from '@nebular/theme';
import {NbMomentDateModule} from '@nebular/moment';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import { SearchBarHomeMobileComponent } from './components/search-bar-home-mobile/search-bar-home-mobile.component';
import { SearchBarHomeDesktopComponent } from './components/search-bar-home-desktop/search-bar-home-desktop.component';
import { SearchBarCarsListDesktopComponent } from './components/search-bar-cars-list-desktop/search-bar-cars-list-desktop.component';
import { SearchBarCarsListMobileComponent } from './components/search-bar-cars-list-mobile/search-bar-cars-list-mobile.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarHeaderMobileComponent } from './components/shared/search-bar-header-mobile/search-bar-header-mobile.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    SearchBarHomeMobileComponent,
    SearchBarHomeDesktopComponent,
    SearchBarCarsListDesktopComponent,
    SearchBarCarsListMobileComponent,
    HeaderComponent,
    SearchBarHeaderMobileComponent,
    HeaderMenuComponent],
  exports: [
    SearchBarComponent,
    HeaderComponent,
    SearchBarHeaderMobileComponent
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
    NbFormFieldModule,
  ]
})
export class SharedModule { }
