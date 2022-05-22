import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { EmployeesSummaryComponent } from './employees-summary/employees-summary.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartViewComponent,
    EmployeesSummaryComponent,
    ProjectSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
