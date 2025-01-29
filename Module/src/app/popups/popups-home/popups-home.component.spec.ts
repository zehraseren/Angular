import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsHomeComponent } from './popups-home.component';

describe('PopupsHomeComponent', () => {
  let component: PopupsHomeComponent;
  let fixture: ComponentFixture<PopupsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
