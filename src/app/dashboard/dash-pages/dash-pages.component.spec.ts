import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPagesComponent } from './dash-pages.component';

describe('DashPagesComponent', () => {
  let component: DashPagesComponent;
  let fixture: ComponentFixture<DashPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashPagesComponent]
    });
    fixture = TestBed.createComponent(DashPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
