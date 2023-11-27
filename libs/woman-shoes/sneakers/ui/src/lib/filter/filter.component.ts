import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter',
  standalone: true,
  templateUrl: './filter.component.html',
  imports: [FormsModule],
})
export class FilterComponent {
  @Output()
  filterChange = new EventEmitter<string>();
}
