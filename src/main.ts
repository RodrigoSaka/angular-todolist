import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from '@shared/env';

async function prepare() {
  if (environment.mock) {
    const { worker } = await import('./mocks/browser');

    return worker.start();
  }

  return Promise.resolve();
}

prepare().then(() => {
  bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
});
