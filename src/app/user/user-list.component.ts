import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tup-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
