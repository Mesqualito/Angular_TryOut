import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit{

  user1 = 'Benutzer Eins';
  user2 = 'Benutzerin Zwei';
  user3 = 'Jochen Gebsattel';

  currentUser3Name: string;

  user1City = 'Musterstadt';

  constructor() { }
  ngOnInit() {  }

  /*
  * Method 'onNameChanged ()' as EventHandler for the
  * user-defined '(nameChanged)' in the template.
  * The information itself is contained in '$event'.
  * 'nameChanged' will transfer a String as defined in 'user-name.component.ts'
   */
  onNameChanged ( newName: string ) {
    console.log( `'newName': ${newName}`);
    this.currentUser3Name = newName;
  }

}
