import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './woman-shoes.interfaces';

@Injectable()
export class WomanShoesService {
  #http = inject(HttpClient);

  sneakers$ = this.#http.get<Product[]>(
    'http://localhost:4200/assets/woman-shoes-sneakers.json',
  );
}
