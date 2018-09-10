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

  constructor() { }
  ngOnInit() {  }
}
