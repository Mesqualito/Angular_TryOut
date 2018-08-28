import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent {

  constructor() {
    console.log('the constructor: 1st stage of life of a component, here:  \'UserList\'');
  }
}
