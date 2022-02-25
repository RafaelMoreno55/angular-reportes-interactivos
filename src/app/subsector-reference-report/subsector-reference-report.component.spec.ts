import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectorReferenceReportComponent } from './subsector-reference-report.component';

describe('SubsectorReferenceReportComponent', () => {
  let component: SubsectorReferenceReportComponent;
  let fixture: ComponentFixture<SubsectorReferenceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsectorReferenceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsectorReferenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
