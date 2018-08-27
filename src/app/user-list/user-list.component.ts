import {Component} from '@angular/core';

@Component({
  selector: 'in-user-list',
  template: `<h1>User List</h1>
  <ul>
    <li>User 1</li>
    <li>User 2</li>
    <li>User 3</li>
  </ul>`
})
export class UserListComponent {

  constructor() {
    console.log('Hello UserList');
  }
}
