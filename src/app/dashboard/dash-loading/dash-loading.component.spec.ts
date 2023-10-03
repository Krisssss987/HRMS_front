import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLoadingComponent } from './dash-loading.component';

describe('DashLoadingComponent', () => {
  let component: DashLoadingComponent;
  let fixture: ComponentFixture<DashLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashLoadingComponent]
    });
    fixture = TestBed.createComponent(DashLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
