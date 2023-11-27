import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { QueryParams } from './woman-shoes.interfaces';
import { WomanShoesService } from './woman-shoes.service';

@Injectable()
export class WomanShoesFacade {
  #queryParams = signal({ current: 0, search: '' });
  #service = inject(WomanShoesService);
  #response = toSignal(this.#service.sneakers$, { initialValue: [] });
  #perPage = 12;
  paginated = computed(() => {
    const { current, search } = this.#queryParams();
    const start = current * this.#perPage;
    const filtered = this.#response().filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase()),
    );

    return {
      current,
      items: filtered.slice(start, start + this.#perPage),
      pages: Array.from({
        length: filtered.length / this.#perPage,
      }).map((_, i) => i),
    };
  });
  #router = inject(Router);

  set navigateToAfterSearch(search: string) {
    this.#router
      .navigate([], {
        queryParams: { search },
        queryParamsHandling: 'merge',
      })
      .catch(err => console.log(err));
  }

  set queryParams(value: Partial<QueryParams>) {
    this.#queryParams.update(s => ({ ...s, ...value }));
  }
}
