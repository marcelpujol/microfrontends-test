import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ShellModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: []}
]

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(ShellModule)
  .catch(err => console.error(err));
