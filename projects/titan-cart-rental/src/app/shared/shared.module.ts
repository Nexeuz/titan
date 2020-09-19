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
import {NbMomentDateModule, NbMomentDateService} from '@nebular/moment';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import { SearchBarHomeMobileComponent } from './components/search-bar-home-mobile/search-bar-home-mobile.component';
import { SearchBarHomeDesktopComponent } from './components/search-bar-home-desktop/search-bar-home-desktop.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarHeaderMobileComponent } from './components/search-bar-header-mobile/search-bar-header-mobile.component';
import { SearchBarHeaderDesktopComponent } from './components/search-bar-header-desktop/search-bar-header-desktop.component';
import { HeaderHomeMenuComponent } from './components/header-home-menu/header-home-menu.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    SearchBarHomeMobileComponent,
    SearchBarHomeDesktopComponent,
    HeaderComponent,
    SearchBarHeaderMobileComponent,
    SearchBarHeaderDesktopComponent,
    HeaderHomeMenuComponent],
  exports: [
    HeaderComponent,
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
    NbFormFieldModule,
  ]
})
export class SharedModule { }
