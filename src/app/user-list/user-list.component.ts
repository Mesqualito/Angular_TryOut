import {Component} from '@angular/core';

@Component({
  selector: 'in-user-list',
  template: '<h1>User List</h1>'
})
export class UserListComponent {

  constructor() {
    console.log('Hello UserList');
  }
}
