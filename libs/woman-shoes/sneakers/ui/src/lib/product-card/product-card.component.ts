import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@draylegend/woman-shoes/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article[product-card]',
  standalone: true,
  styleUrl: './product-card.component.scss',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true })
  product!: Product;
}
