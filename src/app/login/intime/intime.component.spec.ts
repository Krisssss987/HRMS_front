import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntimeComponent } from './intime.component';

describe('IntimeComponent', () => {
  let component: IntimeComponent;
  let fixture: ComponentFixture<IntimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntimeComponent]
    });
    fixture = TestBed.createComponent(IntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
