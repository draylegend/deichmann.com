import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig, makeEnvironmentProviders } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { assetsInterceptor, ENV, environment } from '@draylegend/shared/domain';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([assetsInterceptor])),
    provideRouter(appRoutes),
    makeEnvironmentProviders([{ provide: ENV, useValue: environment }]),
  ],
};
