import { browser, by, element } from 'protractor';

export class AppPage {
  // routing test
  navigateTo() {
    return browser.get('/');
  }

  // find the given selector, return the enclosed text
  getParagraphText() {
    return element(by.css('tUp-root h1')).getText();
  }

  // return input-field
  getInputField(){
    return element(by.css('input'));
  }

  // return the value of the input-field
  getInputFieldValue() {
    return element(by.css('input')).getAttribute('value');
  }

  // "wait"-helper method
  wait ( seconds: number = 1.5 ) {
    browser.sleep( seconds * 1000 );
  }

}
