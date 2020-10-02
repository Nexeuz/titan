import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface QuantityState {
   key: string;
}

export function createInitialState(): QuantityState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'quantity' })
export class QuantityStore extends Store<QuantityState> {

  constructor() {
    super(createInitialState());
  }

}

