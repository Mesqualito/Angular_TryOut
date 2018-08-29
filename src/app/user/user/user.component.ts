import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'in-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,AfterViewInit {

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
    console.log ( '\'AfterViewInit\': the children in the template \'user.component.html\' of \'UserComponent\' completed initialisation' );
  }

}
