import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCardViewComponent } from './mobile-card-view.component';

describe('MobileCardViewComponent', () => {
  let component: MobileCardViewComponent;
  let fixture: ComponentFixture<MobileCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
