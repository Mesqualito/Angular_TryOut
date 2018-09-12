import {Component} from '@angular/core';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showImg = true;
  title = 'in';

  toggle() {
    /*
    * if (this.showImg === true) {
    * this.showImg = false;
    * } else {
    *  this.showImg = true;
    * }
    */
    this.showImg = !this.showImg;
  }
}
