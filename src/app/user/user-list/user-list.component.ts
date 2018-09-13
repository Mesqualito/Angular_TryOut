import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit {

  users: User[] = [
    { name: 'Fritz Holland', age: 32 },
    { name: 'Bernd Brotteig', age: 56 },
    { name: 'Jochen Gebsattel', age: 42 },
    { name: 'Olaf Mayer', age: 10 },
    { name: 'Mister P.', age: 39 }
  ];

  selectedUsrName: string;

  constructor() {
  }

  ngOnInit() {
  }

  /*
  * Method 'onNameChanged ()' as EventHandler for the
  * user-defined '(nameChanged)' in the template.
  * The information itself is contained in '$event'.
  * 'nameChanged' will transfer a String as defined in 'user-name.component.ts'
   */
  onSelectedUsr( selectedUsrName: string) {
    console.log(`'selectedUsrName': ${selectedUsrName}`);
    this.selectedUsrName = selectedUsrName;
  }

}
