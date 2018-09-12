import {Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit, OnChanges {

  /*
  * EventEmitter() comes from the Reactive-X-framework
  * and is used to send information as an event-stream
  * from a child-component to the parent-component
  *
  * here we send the name to the parent, so
  * the EventEmitter should have <string> as
  * generic type
  */
  @Output ()
  nameChanged: EventEmitter<string> = new EventEmitter();

  get name(): string {
    return this._name;
  }

  @Input()
  set name( value: string ) {
    if ( value.trim() !== '' ) {
      this._name = value;
      this.isAdminUser = this._name === 'Jochen Gebsattel';
      console.log( `'this._name': ${this._name}, 'this.isAdminUser': ${this.isAdminUser}` );
    }
  }

  @Input()
  city: string;

  userNameStyleClass = 'user-name';

  private _name = 'Jochen Haßfurter';

  @HostBinding('class.user-name')
  isAdminUser = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event', '_name'])
  chgName(event: MouseEvent, name: string) {
    console.log(event, name);
    if (this._name !== 'Jochen Haßfurter') {
      this._name = 'Jochen Haßfurter';
    } else {
      this._name = 'Jochen Gebsattel';
    }
    this.nameChanged.emit( this.name );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
