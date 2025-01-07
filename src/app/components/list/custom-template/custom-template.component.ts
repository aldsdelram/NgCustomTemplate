import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListData } from '../list.component';
import { CommonModule } from '@angular/common';

export interface CustomTemplateAdditionInfo {
  profilePicture: string;
}

@Component({
  selector: 'app-custom-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-template.component.html',
  styleUrl: './custom-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTemplateComponent {
  @Input() data!: ListData<CustomTemplateAdditionInfo>;
}
