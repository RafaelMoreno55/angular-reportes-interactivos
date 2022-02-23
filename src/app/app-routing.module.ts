import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorReportComponent } from './sector-report/sector-report.component';
import { SubsectorReportComponent } from './subsector-report/subsector-report.component';
import { VariableReportComponent } from './variable-report/variable-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/sectorreport', pathMatch: 'full' },
  { path: 'sectorreport', component: SectorReportComponent },
  { path: 'subsectorreport/:id', component: SubsectorReportComponent },
  { path: 'variablereport/:id', component: VariableReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
