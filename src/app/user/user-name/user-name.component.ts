import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
    console.log ( '\'OnInit\': 3rd stage of life of a component, here: \'UserNameComponent\'' );
  }

  ngDoCheck(): void {
    console.log ( '\'DoCheck\' of \'UserNameComponent\' done!' );
  }

}
