import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Car} from '../../../../core/state/get-cars/get-car.model';
import {environment} from '@env/environment';
import {UserService} from '../../../../core/state/user/user.service';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {GetCarsService} from '../../../../core/state/get-cars/get-cars.service';

@Component({
  selector: 'titan-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss'],
  host: {
    style: 'cursor: pointer',
  }
})
export class CardCarComponent implements OnInit {
  @Input() data: Car;
  servImage: string;
  constructor(private user: UserService,
              private router: Router,
              private getCarsService: GetCarsService,
              private activated: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.user
      .userQuery.userKey$
      .pipe(
        tap(it => this.servImage = `${ environment.host }/${ environment.hostImg }/?token=${ it }&img_id=`)
      ).subscribe();
  }

  @HostListener('click', ['$event'])
  navigateToNewTab(): void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['car-detail', this.data.itemid], {relativeTo: this.activated})
    );
    this.getCarsService.store.setActive(this.data.itemid);
    window.open(url, '_blank');
  }



}
