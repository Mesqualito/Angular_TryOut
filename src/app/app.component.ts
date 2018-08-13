import {Component} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 't-up-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThumbsUp';
  private hash: string;

  constructor() {
    $('body').css('backgroundColor', 'red');
    this.hash = CryptoJS.MD5 ('Hello World').toString();
    console.log( this.hash );
  }
}
