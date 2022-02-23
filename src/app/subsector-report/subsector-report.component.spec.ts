import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectorReportComponent } from './subsector-report.component';

describe('SubsectorReportComponent', () => {
  let component: SubsectorReportComponent;
  let fixture: ComponentFixture<SubsectorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsectorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsectorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
