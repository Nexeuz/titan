import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbLayoutModule, NbListModule, NbMenuModule
} from '@nebular/theme';
import {NbMomentDateModule, NbMomentDateService} from '@nebular/moment';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import { SearchBarHomeMobileComponent } from './components/search-bar-home-mobile/search-bar-home-mobile.component';
import { SearchBarHomeDesktopComponent } from './components/search-bar-home-desktop/search-bar-home-desktop.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarHeaderMobileComponent } from './components/search-bar-header-mobile/search-bar-header-mobile.component';
import { SearchBarHeaderDesktopComponent } from './components/search-bar-header-desktop/search-bar-header-desktop.component';
import { HeaderHomeMenuComponent } from './components/header-home-menu/header-home-menu.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchBarCarsSearchComponent } from './components/search-bar-cars-search/search-bar-cars-search.component';
import { HeaderHomeCarsSearchComponent } from './components/header-home-cars-search/header-home-cars-search.component';
import {AutenticationModule} from '../modules/autentication/autentication.module';



@NgModule({
  declarations: [
    SearchBarComponent,
    SearchBarHomeMobileComponent,
    SearchBarHomeDesktopComponent,
    HeaderComponent,
    SearchBarHeaderMobileComponent,
    SearchBarHeaderDesktopComponent,
    HeaderHomeMenuComponent,
    CarouselComponent,
    SearchBarCarsSearchComponent,
    HeaderHomeCarsSearchComponent,
    BenefitsComponent
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    CarouselComponent,
    BenefitsComponent
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
    NbLayoutModule,
    FormsModule,
    NbListModule,
    AutenticationModule,
    NbMenuModule
  ]
})
export class SharedModule { }
