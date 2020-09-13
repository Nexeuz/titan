import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserStore, UserState } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
  userKey$ = this.store._select(it => it.userKey);

  constructor(protected store: UserStore) {
    super(store);
  }

}
