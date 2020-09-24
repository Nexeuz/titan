import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AddonsStore, AddonsState } from './addons.store';

@Injectable({ providedIn: 'root' })
export class AddonsQuery extends QueryEntity<AddonsState> {

  constructor(protected store: AddonsStore) {
    super(store);
  }

}
