import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

let div: HTMLDivElement = document.createElement( 'div' ) as HTMLDivElement;

// 'innerHTML is an attribute (Eigenschaft) of an instance of a 'div'
div.innerHTML = '<h1>My div</h1>';

document.body.appendChild( div );

