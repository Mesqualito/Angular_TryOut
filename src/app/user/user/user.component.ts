import {AfterViewChecked, AfterViewInit, Component, DoCheck, HostListener, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'in-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit, DoCheck, AfterViewChecked, OnDestroy {

  name = 'Jochen Haßfurter';
  authorNameStyleClass = 'author-name';

  @HostListener ('click', ['$event', 'name'] )
  chgName( event: MouseEvent, name: string ) {
    console.log( event );
    console.log( `Before the if-clause - 'name' has the value: ${name}` );
    console.log( `Before the if-clause - 'this.name' has the value: ${this.name}` );
    if (this.name.endsWith('Haßfurter')) {
      this.name = 'Jochen Gebsattel';
    } else {
      this.name = 'Jochen Haßfurter';
    }
    console.log( `After the if-clause - 'name' has still the value: ${name}.
    The value entered the method as the parameter 'name' and will not be changed within the method!!
    But of course, 'this.name' (now '${this.name}') will be shown!` );
  }

  get isAdminUser (): boolean {
    return this.name === 'Jochen Haßfurter';

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
