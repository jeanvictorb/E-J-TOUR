import { APP_INITIALIZER, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { inject } from '@vercel/analytics';

const analyticsInitializer = {
  provide: APP_INITIALIZER,
  useFactory: () => () => {
    inject({ mode: isDevMode() ? 'development' : 'production' });
  },
  multi: true
};

const updatedAppConfig = {
  ...appConfig,
  providers: [...(appConfig.providers || []), analyticsInitializer]
};

bootstrapApplication(AppComponent, updatedAppConfig)
  .catch((err) => console.error(err));
