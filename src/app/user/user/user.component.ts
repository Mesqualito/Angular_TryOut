import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'in-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit, DoCheck, AfterViewChecked, OnDestroy {

  name = 'Jochen Haßfurter';
  chgName() {
    if(this.name.endsWith("Haßfurter")) {
      this.name = 'Jochen Gebsattel';
    } else {
      this.name = 'Jochen Haßfurter';
    }
  }

  constructor() { }

  ngOnInit() {
    console.log ( '\'OnInit\': 3rd stage of life of a component, here: \'UserComponent\'' );
  }

  ngAfterViewInit(): void {
    console.log ( '\'AfterViewInit\': the children \'<in-user-name></in-user-name>\' ' +
      'and \'<in-user-list></in-user-list>\' in the template \'user.component.html\' of \'UserComponent\' completed initialisation' );
  }

  ngDoCheck(): void {
    console.log ( '\'DoCheck\' of \'UserComponent\' done!' );
  }

  ngAfterViewChecked(): void {
    console.log ( '\'AfterViewChecked\' of \'UserComponent\' done!' );
  }

  ngOnDestroy(): void {
    console.log ( '\'OnDestroy\' of \'UserComponent\' done!' );
  }


}
