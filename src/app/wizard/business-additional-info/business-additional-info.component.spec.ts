import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdditionalInfoComponent } from './business-additional-info.component';

describe('BusinessAdditionalInfoComponent', () => {
  let component: BusinessAdditionalInfoComponent;
  let fixture: ComponentFixture<BusinessAdditionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAdditionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
