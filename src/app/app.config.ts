import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutes),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideAnimations(),
  ]
};
