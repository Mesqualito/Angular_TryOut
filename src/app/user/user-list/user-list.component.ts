import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit {

  users: string[] = [
    'Benutzer Eins',
    'Benutzerin Zwei',
    'Jochen Gebsattel'
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
