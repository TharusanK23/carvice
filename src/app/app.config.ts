import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClient, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';

import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'localization/', '.json');
}

import localeEN from '@angular/common/locales/en-GB';
import localeNB from '@angular/common/locales/nb';

registerLocaleData(localeEN);
registerLocaleData(localeNB);

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutes),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
        useDefaultLang: true,
        defaultLanguage: 'en-gb',
      })
    )
  ]
};
