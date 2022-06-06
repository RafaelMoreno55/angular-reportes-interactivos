import { Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import 'anychart';
import { DataReportService, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';
import { getFraudeResultadoAlto } from 'Utilities/UtilityObject';

@Component({
  selector: 'app-subsector-report',
  templateUrl: './subsector-report.component.html',
  styleUrls: ['./subsector-report.component.css']
})
export class SubsectorReportComponent implements OnInit, OnDestroy {

  isShowCard: number = -1;
  selection: Options = {
    selectedComponent: -1,
    selectedIndex: -1
  }
  private subscription: Subscription | undefined;
  @Input() range1Red: any = [];
  @Input() range2Orange: any = [];
  @Input() range3Yellow: any = [];
  @Input() range4Green: any = [];
  @Input() title: string;
  @Input() ranges: any = [];
  @Input() colorConfig: number;
  @Input() itemDoughnut: number;
  @Output() propertyNameEvent = new EventEmitter<string>();

  constructor(private optionsSvc: DataReportService) {
   }
   
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => {this.selection = option;});
  }

  GoToBack(): void {
    if (this.selection['selectedIndex'] == 18 ) {
      this.selection['selectedComponent'] = 4;
    } else {
      this.selection['selectedComponent'] = 0;
    } 
    this.SetOption(this.selection); 
  }

  GoToVariableReport(propertyName: string): void{
    this.propertyNameEvent.emit(propertyName);
    this.selection['selectedComponent'] = 3;
    this.SetOption(this.selection); 
  }

  GetTitle(): string {
    return "Factores individuales de la categoría " + this.title;
  }
  
  GetDescription(): string {
    if (this.selection['selectedIndex'] == 12) {
      return getFraudeResultadoAlto();
    } else {
      return "Descripción";
    }
  }

  GetSelectedSubSector(): number {
    return this.selection['selectedIndex'];
  }

  SetOption(option: Options): void {
    this.optionsSvc.setOptions(option);
  }

  GetListLength(range: number): number {
    let long = 0;
    switch (range) {
      case 1:
        long = this.range1Red.length;
        break;
      case 2:
        long = this.range2Orange.length;
        break;
      case 3:
        long = this.range3Yellow.length;
        break;
      case 4:
        long = this.range4Green.length;
        break;
    
      default:
        break;
    }
    return long;
  }
}