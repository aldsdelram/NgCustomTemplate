import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  Type,
} from '@angular/core';

export interface ListData<T = Object> {
  id: string;
  header: string;
  description: string;
  additionInformation?: T;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() dataset: ListData[] = [];
  @Input() listItemTemplate!: TemplateRef<any>;
}
