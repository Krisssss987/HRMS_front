import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuttimeComponent } from './outtime.component';

describe('OuttimeComponent', () => {
  let component: OuttimeComponent;
  let fixture: ComponentFixture<OuttimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OuttimeComponent]
    });
    fixture = TestBed.createComponent(OuttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
