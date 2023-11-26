import { InjectionToken } from '@angular/core';

export interface Env {
  assets: string;
}

export const ENV = new InjectionToken<Env>('ENV');

export const environment: Env = {
  assets: '/assets/',
};
