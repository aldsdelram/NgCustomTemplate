import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTemplate2Component } from './custom-template2.component';

describe('CustomTemplate2Component', () => {
  let component: CustomTemplate2Component;
  let fixture: ComponentFixture<CustomTemplate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTemplate2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
