import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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
  }

}
