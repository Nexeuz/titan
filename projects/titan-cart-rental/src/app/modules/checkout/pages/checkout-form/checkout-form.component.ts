import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {UserService} from '../../../../core/state/user/user.service';
import {Observable} from 'rxjs';
import {CarsFee} from '../../../../core/state/user/user.query';
import {Addon} from '../../../../core/state/cars/addons/addon.model';
import {AddonsService} from '../../../../core/state/cars/addons/addons.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'titan-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  form: FormGroup;
  subtotalCarRentFee$: Observable<CarsFee[]>;
  addons$: Observable<Addon[]>;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private addons: AddonsService) { }

  ngOnInit(): void {
    this.createForm();
    this.subtotalCarRentFee$ =   this.userService.userQuery.subtotalCarRentDaysFee$;
    this.addons$ = this.addons.addonsQuery.actives$
      .pipe(
        tap(it => console.log(it))
      );
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
