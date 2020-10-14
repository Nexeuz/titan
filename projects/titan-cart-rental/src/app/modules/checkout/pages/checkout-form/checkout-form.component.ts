import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {UserService} from '../../../../core/state/user/user.service';
import {combineLatest, from, Observable} from 'rxjs';
import {CarsFee} from '../../../../core/state/user/user.query';
import {Addon} from '../../../../core/state/cars/addons/addon.model';
import {AddonsService} from '../../../../core/state/cars/addons/addons.service';
import {map, scan, shareReplay, switchMap, tap} from 'rxjs/operators';
import {Car} from '../../../../core/state/get-cars/get-car.model';
import {GetCarsService} from '../../../../core/state/get-cars/get-cars.service';
import { getEntityType } from '@datorama/akita';
import { GetCarsState } from 'projects/titan-cart-rental/src/app/core/state/get-cars/get-cars.store';
import {environment} from '@env/environment';

@Component({
  selector: 'titan-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  form: FormGroup;
  subtotalCarRentFee$: Observable<CarsFee[]>;
  subtotalCarValueDays$: Observable<number>;
  addons$: Observable<Addon[]>;
  getInsuranceValue$: Observable<string | null>;
  sumValues$: Observable<number>;
  daysSelected$: Observable<number>;
  addonsSubtotal$: Observable<number>;
  carInfo$: Observable<getEntityType<GetCarsState>[]> | Observable<getEntityType<GetCarsState>> =
  this.getCarsService.getCarsQuery.selectActive();
  public urlImage: String;
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
    this.daysSelected$ = this.userService.userQuery.countDays$
      .pipe(
        shareReplay(1)
      );
    this.getInsuranceValue$ = this.userService.userQuery.select(it => it.ui.insuranceSelected)
      .pipe(
        switchMap(it => {
          return (this.getCarsService.getCarsQuery.selectActive() as Observable<Car>)
            .pipe(
              map((car) => (car ? car[`${it}`] : null))
            );
        })
      );
    this.subtotalCarRentFee$ = this.userService.userQuery.subtotalCarRentDaysFee$
      .pipe(
        shareReplay(1)
      );
    this.subtotalCarValueDays$ = this.subtotalCarRentFee$
      .pipe(
        switchMap(it => from(it)),
        scan((acc, value) => acc + value.subtotal, 0)
      );
    this.addons$ = this.addons.addonsQuery.actives$;
    this.addonsSubtotal$ = this.addons$.pipe(
        switchMap(addons => from(addons)),
          scan((acc, value) => acc + Number(value.isale), 0)
    );
    this.userService
    .userQuery.userKey$
    .pipe(
      tap(it => {
        this.urlImage = `${environment.host}/${environment.hostImg}/?token=${it}&img_id=`;
      })
    ).subscribe();
  }

  obsSum(): void {
    this.sumValues$ = combineLatest([this.getInsuranceValue$, this.subtotalCarValueDays$, this.addonsSubtotal$, this.daysSelected$])
      .pipe(
        map(([insuranceValue, subTotalCarFee, addons, daysSelected]) => {
          return (Number(insuranceValue) * daysSelected) + subTotalCarFee + addons;
        })
      );
  }

  createForm(): void {
    this.form = this.fb.group({
      fullName: ['', [Validators.required]],
      koreanLicence: ['', [Validators.required]],
      internationalDriving: ['', [Validators.required]],
      expirationDate: [moment(), [Validators.required]],
      country: ['', [Validators.required]],
      passportOrKoreanCard: ['', [Validators.required]],
      permanentResident: ['', [Validators.required]],
      hotel: ['', [Validators.required]],
      dateOfBirth: [moment(), [Validators.required]],
      phoneWhatsApp: ['', [Validators.required]],
      username: ['', [Validators.required]],
      accountPassword: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      conditions: [false, [Validators.requiredTrue]]
    });

    this.form.valueChanges.subscribe(console.log)
  }

}
