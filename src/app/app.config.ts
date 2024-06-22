import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpEvent, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http'
import { Observable } from 'rxjs'

function baseURLInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (isDevMode()) {
    const apiRequest = req.clone({ url: `http://localhost:4200/${req.url}` })
    return next(apiRequest)
  }
  throw new Error('Please setup Production URL for `baseURLInterceptor` function!')
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([
        baseURLInterceptor,
      ])
    ),
  ]
};
