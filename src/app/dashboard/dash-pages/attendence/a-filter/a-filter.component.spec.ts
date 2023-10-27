import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFilterComponent } from './a-filter.component';

describe('AFilterComponent', () => {
  let component: AFilterComponent;
  let fixture: ComponentFixture<AFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AFilterComponent]
    });
    fixture = TestBed.createComponent(AFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
