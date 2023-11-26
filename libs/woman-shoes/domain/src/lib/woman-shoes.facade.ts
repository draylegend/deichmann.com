import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WomanShoesService } from './woman-shoes.service';

@Injectable()
export class WomanShoesFacade {
  current = signal(0);
  #service = inject(WomanShoesService);
  #response = toSignal(this.#service.sneakers$, { initialValue: [] });
  #perPage = 12;
  paginated = computed(() => {
    const start = this.current() * this.#perPage;

    return {
      items: this.#response().slice(start, start + this.#perPage),
      pages: Array.from({
        length: this.#response().length / this.#perPage,
      }).map((_, i) => i),
      current: this.current(),
    };
  });
}
