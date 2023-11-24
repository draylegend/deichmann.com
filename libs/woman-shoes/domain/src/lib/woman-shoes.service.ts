import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LOAD_FROM_ASSETS } from '@draylegend/shared/domain';
import { Product } from './woman-shoes.interfaces';

@Injectable()
export class WomanShoesService {
  #http = inject(HttpClient);

  sneakers$ = this.#http.get<Product[]>('woman-shoes-sneakers.json', {
    context: new HttpContext().set(LOAD_FROM_ASSETS, true),
  });
}
