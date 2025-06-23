import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { routes } from './app.routes';
import { authInterceptor } from '../auth-interceptor';
import { errorInterceptor } from './error-interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Uygulama rotalarını sağlar ve component input binding'i otomatik hale getirir
    provideRouter(routes, withComponentInputBinding()),
    // HTTP Client sağlayıcısını oluşturur ve interceptor'ları zincire ekler authInterceptor ve errorInterceptor, tüm HTTP isteklerinde devrede olur
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
  ],
};
