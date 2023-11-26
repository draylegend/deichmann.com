import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ENV } from './environment.development';

export const LOAD_FROM_ASSETS = new HttpContextToken(() => false);

export const assetsInterceptor: HttpInterceptorFn = (req, next) =>
  next(
    req.context.get(LOAD_FROM_ASSETS)
      ? req.clone({ url: inject(ENV).assets + req.url })
      : req,
  );
