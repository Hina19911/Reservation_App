import { ApplicationConfig, importProvidersFrom, provideZonelessChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      BrowserModule,
      ReactiveFormsModule, // ✅ Needed for [formGroup]
      FormsModule,         // ✅ Needed for ngFor, ngValue, etc.
     
    )
  ]
};


