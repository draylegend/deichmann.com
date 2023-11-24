import { Provider } from '@angular/core';
import { WomanShoesFacade } from './lib/woman-shoes.facade';
import { WomanShoesService } from './lib/woman-shoes.service';

export { WomanShoesFacade, WomanShoesService };
export * from './lib/woman-shoes.interfaces';
export const womanShoesProviders: Provider[] = [
  WomanShoesFacade,
  WomanShoesService,
];
