import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpHoursCardComponent } from './op-hours-card.component';

describe('OpHoursCardComponent', () => {
  let component: OpHoursCardComponent;
  let fixture: ComponentFixture<OpHoursCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpHoursCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpHoursCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
