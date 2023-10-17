import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleaveComponent } from './myleave.component';

describe('MyleaveComponent', () => {
  let component: MyleaveComponent;
  let fixture: ComponentFixture<MyleaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyleaveComponent]
    });
    fixture = TestBed.createComponent(MyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
