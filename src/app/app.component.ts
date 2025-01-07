import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent, ListData } from './components/list/list.component';
import {
  CustomTemplateAdditionInfo,
  CustomTemplateComponent,
} from './components/list/custom-template/custom-template.component';
import { CommonModule } from '@angular/common';
import {
  CustomTemplate2AdditionInfo,
  CustomTemplate2Component,
} from './components/list/custom-template2/custom-template2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ListComponent,
    CustomTemplateComponent,
    CustomTemplate2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NgCustomTemplate';
  lorem =
    ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, consectetur dolores expedita quasi minima asperiores ipsum inventore impedit excepturi itaque fuga assumenda suscipit. Dicta laborum soluta unde harum repudiandae iusto?';
  dataset: ListData<CustomTemplateAdditionInfo>[] = Array.from(
    { length: 2 },
    (i): ListData<CustomTemplateAdditionInfo> => {
      return {
        header: 'hello' + i,
        id: 'id' + i,
        description: Math.random() + this.lorem,
        additionInformation: {
          profilePicture: 'hi' + i + '.jpg',
        },
      };
    }
  );

  dataset2: ListData<CustomTemplate2AdditionInfo>[] = Array.from(
    { length: 2 },
    (i): ListData<CustomTemplate2AdditionInfo> => {
      return {
        header: 'hello' + i,
        id: 'id' + i,
        description: Math.random() + this.lorem,
        additionInformation: {
          password: 'hi' + i + '.jpg',
        },
      };
    }
  );
}
