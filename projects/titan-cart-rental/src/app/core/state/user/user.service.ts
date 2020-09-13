import {Injectable} from '@angular/core';
import {UserQuery} from './user.query';
import {UserFormSelected, UserStore} from './user.store';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public userQuery: UserQuery,
              public userStore: UserStore) {

  }

  dispatchUserValueForm(userSelected: UserFormSelected): void {
    this.userStore.update(state => ({
        ...state,
       ui: userSelected
      })
    );
  }
}
