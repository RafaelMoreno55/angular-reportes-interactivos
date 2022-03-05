import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SectorReportComponent } from './sector-report/sector-report.component';
import { SubsectorReportComponent } from './subsector-report/subsector-report.component';
import { VariableReportComponent } from './variable-report/variable-report.component';
import { AppRoutingModule } from './app-routing.module';
import { SubsectorReferenceReportComponent } from './subsector-reference-report/subsector-reference-report.component';
import { ReportsComponent } from './reports/reports.component';
import { DataReportService } from './data-report.service';

@NgModule({
  declarations: [
    AppComponent,
    SectorReportComponent,
    SubsectorReportComponent,
    VariableReportComponent,
    SubsectorReferenceReportComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
