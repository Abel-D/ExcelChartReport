import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { EmployeesSummaryComponent } from './employees-summary/employees-summary.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout'
@NgModule({
  declarations: [
    AppComponent,
    ChartViewComponent,
    EmployeesSummaryComponent,
    ProjectSummaryComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    NzLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
