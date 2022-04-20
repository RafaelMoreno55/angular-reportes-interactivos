import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectorDoughnutComponent } from './subsector-doughnut.component';

describe('SubsectorDoughnutComponent', () => {
  let component: SubsectorDoughnutComponent;
  let fixture: ComponentFixture<SubsectorDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsectorDoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsectorDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
