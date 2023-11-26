import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationConfig } from '@draylegend/woman-shoes/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pagination',
  standalone: true,
  styleUrl: './pagination.component.scss',
  templateUrl: './pagination.component.html',
  imports: [RouterLink],
})
export class PaginationComponent {
  pages: number[] = [];

  @Input({ required: true })
  config!: PaginationConfig;
}
