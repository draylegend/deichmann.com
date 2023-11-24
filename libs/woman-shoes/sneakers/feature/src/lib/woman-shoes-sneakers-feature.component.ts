import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[feature=woman-shoes-sneakers]',
  standalone: true,
  styleUrl: './woman-shoes-sneakers-feature.component.scss',
  templateUrl: './woman-shoes-sneakers-feature.component.html',
})
export default class WomanShoesSneakersFeatureComponent {}
