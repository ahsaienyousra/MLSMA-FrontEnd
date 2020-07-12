import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredchartComponent } from './predchart.component';

describe('PredchartComponent', () => {
  let component: PredchartComponent;
  let fixture: ComponentFixture<PredchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
