import { Route } from '@angular/router';

export const womanShoesSneakersFeatureRoute: Route = {
  path: 'woman-shoes/sneakers',
  loadComponent: () => import('./woman-shoes-sneakers-feature.component'),
};
