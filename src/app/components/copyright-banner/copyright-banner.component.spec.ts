import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightBannerComponent } from './copyright-banner.component';

describe('CopyrightBannerComponent', () => {
  let component: CopyrightBannerComponent;
  let fixture: ComponentFixture<CopyrightBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
