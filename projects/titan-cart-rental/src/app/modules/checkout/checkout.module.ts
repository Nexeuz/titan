import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutFormComponent } from './pages/checkout-form/checkout-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule
} from '@nebular/theme';
import {NbMomentDateModule} from '@nebular/moment';
import { SubTotalCardComponent } from './components/sub-total-card/sub-total-card.component';
import { SubtotalHeaderDirective } from './directives/subtotal-header.directive';


@NgModule({
  declarations: [CheckoutComponent, CheckoutFormComponent, SubTotalCardComponent, SubtotalHeaderDirective],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    NbFormFieldModule,
    NbInputModule,
    NbSelectModule,
    NbDatepickerModule,
    NbMomentDateModule,
    NbCheckboxModule,
    NbRadioModule,
    NbCardModule,
    NbButtonModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CheckoutModule { }
