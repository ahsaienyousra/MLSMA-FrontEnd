import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrychartComponent } from './countrychart.component';

describe('CountrychartComponent', () => {
  let component: CountrychartComponent;
  let fixture: ComponentFixture<CountrychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
