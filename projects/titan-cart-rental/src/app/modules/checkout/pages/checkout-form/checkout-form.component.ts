import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {UserService} from '../../../../core/state/user/user.service';
import {combineLatest, Observable} from 'rxjs';
import {CarsFee} from '../../../../core/state/user/user.query';
import {Addon} from '../../../../core/state/cars/addons/addon.model';
import {AddonsService} from '../../../../core/state/cars/addons/addons.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {Car} from '../../../../core/state/get-cars/get-car.model';
import {GetCarsService} from '../../../../core/state/get-cars/get-cars.service';

@Component({
  selector: 'titan-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  form: FormGroup;
  subtotalCarRentFee$: Observable<CarsFee[]>;
  addons$: Observable<Addon[]>;
  getInsuranceValue$: Observable<string | null>;
  sumValues$: Observable<number>;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private addons: AddonsService,
              private getCarsService: GetCarsService) {
  }

  ngOnInit(): void {
    this.createForm();
    this.initObs();
    this.obsSum();
  }

  initObs(): void {
    this.getInsuranceValue$ = this.userService.userQuery.select(it => it.ui.insuranceSelected)
      .pipe(
        switchMap(it => {
          return (this.getCarsService.getCarsQuery.selectActive() as Observable<Car>)
            .pipe(
              map((car) => (car ? car[`${it}`] : null))
            );
        })
      );
    this.subtotalCarRentFee$ = this.userService.userQuery.subtotalCarRentDaysFee$;
    this.addons$ = this.addons.addonsQuery.actives$;
  }

  obsSum(): void {
    this.sumValues$ = combineLatest([this.getInsuranceValue$, this.subtotalCarRentFee$, this.addons$])
      .pipe(
        map(([insuranceValue, subTotalCarFee, addons]) => {
          const subtotalCarFeeValue = subTotalCarFee.reduce((acc, curr) => curr.subtotal + acc, 0);
          const addonsValue = addons.map(mp => Number(mp.isale)).reduce((acc, curr) => curr + acc, 0);
          return Number(insuranceValue) + subtotalCarFeeValue + addonsValue;
        })
      );
  }

  createForm(): void {
    this.form = this.fb.group({
      fullname: ['', [Validators.required]],
      koreanLicence: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      country: ['', [Validators.required]],
      internationalDriving: ['', [Validators.required]],
      passportOrKoreanCard: ['', [Validators.required]],
      permanentResident: ['', [Validators.required]],
      hotel: ['', [Validators.required]],
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
