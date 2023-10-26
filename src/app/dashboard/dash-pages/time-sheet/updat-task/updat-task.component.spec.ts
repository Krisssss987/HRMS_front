import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatTaskComponent } from './updat-task.component';

describe('UpdatTaskComponent', () => {
  let component: UpdatTaskComponent;
  let fixture: ComponentFixture<UpdatTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatTaskComponent]
    });
    fixture = TestBed.createComponent(UpdatTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
