import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorReportComponent } from './sector-report.component';

describe('SectorReportComponent', () => {
  let component: SectorReportComponent;
  let fixture: ComponentFixture<SectorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
