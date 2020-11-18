import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdderTwoComponent } from './adder-two.component';

describe('AdderTwoComponent', () => {
  let component: AdderTwoComponent;
  let fixture: ComponentFixture<AdderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdderTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
