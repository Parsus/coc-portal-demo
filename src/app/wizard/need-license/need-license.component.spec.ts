import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedLicenseComponent } from './need-license.component';

describe('NeedLicenseComponent', () => {
  let component: NeedLicenseComponent;
  let fixture: ComponentFixture<NeedLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
