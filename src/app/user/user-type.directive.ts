import { Directive } from '@angular/core';

@Directive({
  selector: '[tupUserType]'
})
export class UserTypeDirective {

  constructor() {
    console.log('Hello directive');
  }

}
