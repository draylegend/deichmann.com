import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { WomanShoesFacade } from '@draylegend/woman-shoes/domain';
import {
  PaginationComponent,
  ProductCardComponent,
} from '@draylegend/woman-shoes/sneakers/ui';

const transform = (v: string | undefined) => Number(v ?? 0);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[feature=woman-shoes-sneakers]',
  standalone: true,
  styleUrl: './woman-shoes-sneakers-feature.component.scss',
  templateUrl: './woman-shoes-sneakers-feature.component.html',
  imports: [ProductCardComponent, PaginationComponent],
})
export default class WomanShoesSneakersFeatureComponent {
  facade = inject(WomanShoesFacade);

  /** Component input binding (page query param) */
  @Input({ transform })
  set page(index: number) {
    this.facade.current.set(index);
  }
}
