import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from './shared/shared.module';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
