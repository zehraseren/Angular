import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { products } from './products.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Tüm route'ları birleştirerek router'ı sağlar, ayrıca withComponentInputBinding() ile route parametrelerini doğrudan @Input() ile bağlamayı etkinleştirir
    provideRouter([...routes, ...products], withComponentInputBinding()),
  ],
};
