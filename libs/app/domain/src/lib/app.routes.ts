import { Routes } from '@angular/router';
import { womanShoesSneakersFeatureRoute } from '@draylegend/woman-shoes-sneakers-feature';

export const appRoutes: Routes = [
  womanShoesSneakersFeatureRoute,
  { path: '**', redirectTo: womanShoesSneakersFeatureRoute.path },
];
