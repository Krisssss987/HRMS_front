import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLayoutComponent } from './users-layout.component';

describe('UsersLayoutComponent', () => {
  let component: UsersLayoutComponent;
  let fixture: ComponentFixture<UsersLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersLayoutComponent]
    });
    fixture = TestBed.createComponent(UsersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
