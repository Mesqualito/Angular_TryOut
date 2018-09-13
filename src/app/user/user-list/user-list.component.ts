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
    { name: 'Fritz Holland', age: 32, imgPath: 'assets/img/Beer-belly 1.jpg' },
    { name: 'Bernd Brotteig', age: 56, imgPath: 'assets/img/Beer-belly 2.jpg' },
    { name: 'Jochen Gebsattel', age: 42, imgPath: 'assets/img/Beer-belly 3.jpg' },
    { name: 'Olaf Mayer', age: 10, imgPath: 'assets/img/Beer-belly 4.jpg' },
    { name: 'Mister P.', age: 39, imgPath: 'assets/img/Beer-belly 5.jpg' },
    { name: 'Test Muster', age: 68, imgPath: 'assets/img/Beer-belly 6.jpg' }
  ];

  selectedUsr: User;

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedUsr( selectedUsr: User) {
    this.selectedUsr = selectedUsr;
  }

}
