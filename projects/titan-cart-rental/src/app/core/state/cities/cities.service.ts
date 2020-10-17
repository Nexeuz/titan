import { Injectable } from '@angular/core';
import {applyTransaction, ID} from '@datorama/akita';
import {HttpClient, HttpParams} from '@angular/common/http';
import { CitiesStore } from './cities.store';
import { City } from './city.model';
import { tap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserService} from '../user/user.service';
import {environment} from '../../../../../../../environments/environment';
import {CitiesQuery} from './cities.query';

@Injectable({ providedIn: 'root' })
export class CitiesService {

  constructor(public store: CitiesStore,
              public citiesQuery: CitiesQuery,
              private http: HttpClient,
              private userService: UserService) {
  }

  getCities(): Observable<City[]> {
    this.store.setLoading(true);
    const params = new HttpParams().set(
      'token', `${this.userService.userQuery.getValue().userKey}`,
    ).set('select', 'cities');
    return this.http.get<City[]>(`${ environment.host }/${ environment.hostCars }`, {params})
      .pipe(
        tap(it => {
          applyTransaction(() => {
            this.store.setLoading(false);
            this.store.set(it);
          });
        })
      );
  }
}
