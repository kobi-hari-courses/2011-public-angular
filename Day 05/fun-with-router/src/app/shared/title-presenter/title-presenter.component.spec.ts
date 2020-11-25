import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePresenterComponent } from './title-presenter.component';

describe('TitlePresenterComponent', () => {
  let component: TitlePresenterComponent;
  let fixture: ComponentFixture<TitlePresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
