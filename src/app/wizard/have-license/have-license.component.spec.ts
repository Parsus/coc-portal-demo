import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveLicenseComponent } from './have-license.component';

describe('HaveLicenseComponent', () => {
  let component: HaveLicenseComponent;
  let fixture: ComponentFixture<HaveLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
