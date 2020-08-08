import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFprmComponent } from './simple-fprm.component';

describe('SimpleFprmComponent', () => {
  let component: SimpleFprmComponent;
  let fixture: ComponentFixture<SimpleFprmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFprmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFprmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
