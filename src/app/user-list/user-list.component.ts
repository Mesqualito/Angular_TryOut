import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit {

  constructor() {
    console.log('the constructor: 1st stage of life of a component, here:  \'UserList\'');
  }

  ngOnInit(): void {
    console.log( '\'OnInit\': 3rd stage of life of a component, here: \'UserList\'' );
  }
}
