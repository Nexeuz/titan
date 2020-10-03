import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'titan-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      koreanLicence: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      country: ['', [Validators.required]],
      internationalDriving: ['', [Validators.required]],
      passportOrKoreanCard: ['', [Validators.required]],
      permanentResident: ['', [Validators.required]],
      hotel: ['', [Validators.required]],
      koreanHome: ['', [Validators.required]],
      dateOfBirth: [moment(), [Validators.required]],
      phoneWhatsApp: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]],
      accountPassword: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      conditions: ['', [Validators.required]]
    });
  }

}
