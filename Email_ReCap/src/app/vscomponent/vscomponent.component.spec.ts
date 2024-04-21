import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VScomponentComponent } from './vscomponent.component';

describe('VScomponentComponent', () => {
  let component: VScomponentComponent;
  let fixture: ComponentFixture<VScomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VScomponentComponent]
    });
    fixture = TestBed.createComponent(VScomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
