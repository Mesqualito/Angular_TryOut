import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit, DoCheck {
  get privateDescription(): string {
    return this._privateDescription;
  }

  set privateDescription(value: string) {
    this._privateDescription = value;
  }

  description = 'Dies ist ein Beschreibungs-String!';
  private _privateDescription = 'auch mit Gettern und Settern möglich...';

  htmlContent: string = `<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>`;

  imgPath = '/assets/img/Beer-belly 5.jpg';
  private _altLabel = 'Beer-belly!';

  getAltLabel(): string {
    return this._altLabel;
  };

  constructor() { }

  ngOnInit() {
    console.log ( '\'OnInit\': 3rd stage of life of a component, here: \'UserNameComponent\'' );
  }

  ngDoCheck(): void {
    console.log ( '\'DoCheck\' of \'UserNameComponent\' done!' );
  }

}
