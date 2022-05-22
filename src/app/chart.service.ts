import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  chartConfig:BehaviorSubject<any>=new BehaviorSubject<any>({});
  _chartConfig=this.chartConfig.asObservable();

  constructor() { }

  getChartConfig(config:any):any{debugger;

    this.chartConfig.next(config);

    return this._chartConfig;
  }
}
