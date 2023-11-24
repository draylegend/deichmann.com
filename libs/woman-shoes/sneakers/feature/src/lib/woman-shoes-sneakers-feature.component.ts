import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WomanShoesFacade } from '@draylegend/woman-shoes-domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[feature=woman-shoes-sneakers]',
  standalone: true,
  styleUrl: './woman-shoes-sneakers-feature.component.scss',
  templateUrl: './woman-shoes-sneakers-feature.component.html',
})
export default class WomanShoesSneakersFeatureComponent {
  facade = inject(WomanShoesFacade);
}
