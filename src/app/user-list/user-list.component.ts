import {Component} from '@angular/core';

@Component({
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    `
    h1 {
        text-decoration: underline;
      }
    ul {
      list-style: none;
    }
  `
  ]
})
export class UserListComponent {

  constructor() {
    console.log('Hello UserList');
  }
}
