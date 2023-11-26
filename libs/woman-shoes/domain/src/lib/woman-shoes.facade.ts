import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WomanShoesService } from './woman-shoes.service';

@Injectable()
export class WomanShoesFacade {
  #service = inject(WomanShoesService);
  sneakers = toSignal(this.#service.sneakers$);
}
