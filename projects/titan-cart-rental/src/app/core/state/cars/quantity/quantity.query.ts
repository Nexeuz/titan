import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { QuantityStore, QuantityState } from './quantity.store';

@Injectable({ providedIn: 'root' })
export class QuantityQuery extends Query<QuantityState> {

  constructor(protected store: QuantityStore) {
    super(store);
  }

}
