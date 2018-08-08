import {Component} from '@angular/core';

@Component({
  selector: 'tUp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThumbsUp';

  constructor() {
    $('body').css('backgroundColor', 'red');
  }
}
