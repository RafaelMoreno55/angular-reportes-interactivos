import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableReportComponent } from './variable-report.component';

describe('VariableReportComponent', () => {
  let component: VariableReportComponent;
  let fixture: ComponentFixture<VariableReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
