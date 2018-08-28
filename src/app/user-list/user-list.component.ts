import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent {

  constructor() {
    console.log('Hello UserList');
  }
}
