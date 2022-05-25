import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataReportService, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subsector-reference-report',
  templateUrl: './subsector-reference-report.component.html',
  styleUrls: ['./subsector-reference-report.component.css']
})
export class SubsectorReferenceReportComponent implements OnInit, OnDestroy{
  
  selection: Options = {
    selectedComponent: 0,
    selectedIndex: -1
  };
  private subscription: Subscription | undefined;
  @Input() rowsReferenceData: any = [];
  @Input() averageValue: number;
  @Input() colorConfig: number;
  @Input() range: number;

  constructor(private optionsSvc: DataReportService) { 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  ngOnInit(): void {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => {this.selection = option;});
  }

  GoToBack(): void {
    this.selection['selectedComponent'] = 0;
    this.SetOption(this.selection);
  }

  GetTitle(): string {
    return "referencias";
  }
  
  GetDescription(): string {
    return " ";
  }

  SetOption(option: Options): void {
    this.optionsSvc.setOptions(option);
  }
}
