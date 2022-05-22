import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit {
  @Input() type:string='';
  chartData:any |null=null ;
  labels:any[]=[];
  data: any;
  subscription:Subscription=new Subscription();  

  constructor(private _chartService:ChartService) { }

  ngOnInit(): void {

    this._chartService.chartConfig.subscribe(res=>this.chartData=res)
    console.log(this.chartData)
    this.labels=this.chartData.labels;
    this.data=this.chartData as ChartOptions;

  }

}
