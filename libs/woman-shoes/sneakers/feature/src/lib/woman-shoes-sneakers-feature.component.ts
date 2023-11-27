import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { WomanShoesFacade } from '@draylegend/woman-shoes/domain';
import {
  FilterComponent,
  PaginationComponent,
  ProductCardComponent,
} from '@draylegend/woman-shoes/sneakers/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[feature=woman-shoes-sneakers]',
  standalone: true,
  styleUrl: './woman-shoes-sneakers-feature.component.scss',
  templateUrl: './woman-shoes-sneakers-feature.component.html',
  imports: [FilterComponent, ProductCardComponent, PaginationComponent],
})
export default class WomanShoesSneakersFeatureComponent {
  facade = inject(WomanShoesFacade);

  /** Component input binding (page query param) */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ transform: (v: string | undefined) => Number(v ?? 0) })
  set page(page: number) {
    this.facade.queryParams = { page };
  }

  /** Component input binding (search query param) */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ transform: (v: string | undefined) => v ?? '' })
  set search(search: string) {
    this.facade.queryParams = { search };
  }
}
