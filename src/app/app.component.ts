import {Component} from '@angular/core';

@Component({
  selector: 't-up-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThumbsUp';

  constructor() {
    $('body').css('backgroundColor', 'red');
  }
}
