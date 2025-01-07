import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListData } from '../list.component';

export interface CustomTemplate2AdditionInfo {
  password: string;
}

@Component({
  selector: 'app-custom-template2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-template2.component.html',
  styleUrl: './custom-template2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTemplate2Component {
  @Input() data!: ListData<CustomTemplate2AdditionInfo>;
}
