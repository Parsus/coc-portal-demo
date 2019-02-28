import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyHaveLicenseComponent } from './already-have-license.component';

describe('AlreadyHaveLicenseComponent', () => {
  let component: AlreadyHaveLicenseComponent;
  let fixture: ComponentFixture<AlreadyHaveLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyHaveLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyHaveLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
