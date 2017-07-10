import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityInputFormComponent } from './city-input-form.component';

describe('CityInputFormComponent', () => {
  let component: CityInputFormComponent;
  let fixture: ComponentFixture<CityInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
