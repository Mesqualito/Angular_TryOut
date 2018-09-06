import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'in';
  showUserInfo = true;

  // NOT registered to the app-component itself,
  // but on the 'window' !
  @HostListener('window:resize', ['$event'])
  resize ( event: Event ) {
    console.log( event );
  };

}
