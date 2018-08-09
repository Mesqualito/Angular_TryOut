import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  console.log ( '\'prod\' - const environment: production: true' );
} else {
  console.log ( '\'dev\' - const environment: production: false' );
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
