import {Injectable} from '@angular/core';
import {GetCarsStore, GetCarsState} from './get-cars.store';
import {NgEntityService, NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import {UserQuery} from '../user/user.query';
import {HttpParams} from '@angular/common/http';
import {take, tap} from 'rxjs/operators';
import {Car} from './get-car.model';
import {Observable} from 'rxjs';

@NgEntityServiceConfig({
  resourceName: 'admincars/carlist.php',
})
@Injectable({providedIn: 'root'})
export class GetCarsService extends NgEntityService<GetCarsState> {


  constructor(protected store: GetCarsStore,
              private userQuery: UserQuery) {
    super(store);
  }

  getCars(select = 'models', bkdt = '2020-01-01:2020-02-03', city = 'Gwangju'): Observable<Car[]> {
    const params = new HttpParams().set(
      'token', `${  this.userQuery.getValue().userKey}`,
    ).set('select', select)
      .set('bkdt', bkdt)
      .set('city', city);

    return this.get<Car[]>('', {params})
      .pipe(
        tap(it => {
          this.store.set(it);
        })
      );
  }


}
