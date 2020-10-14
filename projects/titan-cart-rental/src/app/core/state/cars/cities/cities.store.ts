import { Injectable } from '@angular/core';
import { City } from './city.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CitiesState extends EntityState<City> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cities', idKey: '0' })
export class CitiesStore extends EntityStore<CitiesState> {

  constructor() {
    super();
  }

}

