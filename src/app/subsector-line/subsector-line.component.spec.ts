import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectorLineComponent } from './subsector-line.component';

describe('SubsectorLineComponent', () => {
  let component: SubsectorLineComponent;
  let fixture: ComponentFixture<SubsectorLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsectorLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsectorLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
