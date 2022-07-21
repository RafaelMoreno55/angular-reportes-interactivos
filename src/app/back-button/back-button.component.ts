import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataReportService, Options } from 'app/data-report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit, OnDestroy{

  selection: Options = {
    selectedComponent: 0,
    selectedIndex: -1
  };
  private subscription: Subscription | undefined;

  constructor(private optionsSvc: DataReportService) { }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.optionsSvc.selectedOption$.subscribe((option: Options) => {this.selection = option;});
  }

  GoToBack(): void {
    if (this.selection['selectedIndex'] == 12 && this.selection['selectedComponent'] == 1) {
      this.selection['selectedComponent'] = 0;
    }
    if (this.selection['selectedIndex'] == 12 && this.selection['selectedComponent'] == 3) {
      this.selection['selectedComponent'] = 1;
    }
    if (this.selection['selectedIndex'] == 16 && this.selection['selectedComponent'] == 5) {
      this.selection['selectedComponent'] = 0;
    }
    if (this.selection['selectedIndex'] == 16 && this.selection['selectedComponent'] == 3) {
      this.selection['selectedComponent'] = 5;
    }
    if (this.selection['selectedIndex'] == 18 && this.selection['selectedComponent'] == 4) {
      this.selection['selectedComponent'] = 0;
    }
    if (this.selection['selectedIndex'] == 18 && this.selection['selectedComponent'] == 1) {
      this.selection['selectedComponent'] = 4;
    }
    if (this.selection['selectedIndex'] == 18 && this.selection['selectedComponent'] == 3) {
      this.selection['selectedComponent'] = 1;
    }
    if (this.selection['selectedIndex'] == 29 && this.selection['selectedComponent'] == 2) {
      this.selection['selectedComponent'] = 0;
    }
    if (this.selection['selectedIndex'] != 12 && this.selection['selectedIndex'] != 18 && this.selection['selectedComponent'] == 1) {
      this.selection['selectedComponent'] = 0;
    }
    if (this.selection['selectedIndex'] != 12 && this.selection['selectedIndex'] != 18 && this.selection['selectedComponent'] == 3) {
      this.selection['selectedComponent'] = 1;
    }
    this.SetOption(this.selection);
  }

  SetOption(option: Options): void{
    this.optionsSvc.setOptions(option);
  }
}
