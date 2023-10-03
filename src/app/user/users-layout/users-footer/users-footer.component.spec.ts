import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFooterComponent } from './users-footer.component';

describe('UsersFooterComponent', () => {
  let component: UsersFooterComponent;
  let fixture: ComponentFixture<UsersFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersFooterComponent]
    });
    fixture = TestBed.createComponent(UsersFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
