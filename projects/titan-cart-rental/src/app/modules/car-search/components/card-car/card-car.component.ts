import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../../../core/state/get-cars/get-car.model';
import {environment} from '@env/environment';
import {UserService} from '../../../../core/state/user/user.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'titan-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss'],
})
export class CardCarComponent implements OnInit {
  @Input() data: Car;
  servImage: string;
  constructor(private user: UserService) {

  }

  ngOnInit(): void {
    this.user
      .userQuery.userKey$
      .pipe(
        tap(it => this.servImage = `${ environment.host }/admincars/carimage.php/?token=${ it }&img_id=`)
      ).subscribe();
  }

}
