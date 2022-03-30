import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorReportComponent } from './sector-report/sector-report.component';
import { SubsectorReportComponent } from './subsector-report/subsector-report.component';
import { VariableReportComponent } from './variable-report/variable-report.component';
import { SubsectorReferenceReportComponent } from './subsector-reference-report/subsector-reference-report.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: '/sectorreport/:id/:star', pathMatch: 'full' },
  { path: 'sectorreport/:id/:star', component: SectorReportComponent },
  { path: 'report/:id/:star', component: ReportsComponent },
  // { path: 'subsectorreport/:id', component: SubsectorReportComponent },
  // { path: 'variablereport/:id', component: VariableReportComponent },
  // { path: 'referencereport/:id', component: SubsectorReferenceReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
