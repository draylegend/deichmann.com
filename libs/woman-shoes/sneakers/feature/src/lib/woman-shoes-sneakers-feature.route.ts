import { Route } from '@angular/router';
import { womanShoesProviders } from '@draylegend/woman-shoes-domain';

export const womanShoesSneakersFeatureRoute: Route = {
  path: 'woman-shoes/sneakers',
  loadComponent: () => import('./woman-shoes-sneakers-feature.component'),
  providers: [womanShoesProviders],
};
