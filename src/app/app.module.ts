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
import { SubsectorDoughnutComponent } from './subsector-doughnut/subsector-doughnut.component';
import { SubsectorLineComponent } from './subsector-line/subsector-line.component';
import { MoreInformationComponent } from './more-information/more-information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SectorReportComponent,
    SubsectorReportComponent,
    VariableReportComponent,
    SubsectorReferenceReportComponent,
    ReportsComponent,
    SubsectorDoughnutComponent,
    SubsectorLineComponent,
    MoreInformationComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [MoreInformationComponent],
  providers: [DataReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
