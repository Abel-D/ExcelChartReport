import { Component, OnInit } from '@angular/core';
import { Chart,ChartOptions } from 'chart.js';
import { ChartService } from '../chart.service';
import { chartConfigData } from './../../../defaultChartConfig';

@Component({
  selector: 'app-employees-summary',
  templateUrl: './employees-summary.component.html',
  styleUrls: ['./employees-summary.component.css']
})
export class EmployeesSummaryComponent implements OnInit {
  empData: any[]=[];
  cData:any|null=null;
  labels:string[]=["Billable","Non-Billable","Shadow"];
  color:string[]=["green","yellow","red"];
  dataOutput: number[]=[];

  constructor(private _chartService:ChartService) { }
  // data = {
  //   labels: this.labels,
  //   datasets: [
  //     {
  //       label:[],
  //       data: this.empData,
  //       backgroundColor:["white"],
  //       borderColor: [
  //        ],
  //       borderWidth: [1,1,1,1,1],
  //       cutout:'90%',
  //       offset:10
  //     }
  //   ]
  // };
  // options:any={
  //   maintainAspectRatio:false, 
  //    responsive: true,
  //    borderJoinStyle:"bevel",
  //    title: {
  //      display: true,
  //      position: "top",
  //      text: "Doughnut Chart",
  //      fontSize: 18,
  //      fontColor: "#111"
  //    },
  //    legend: {
      
  //      rotation:Math.PI*2,
  //      display: false,
  //      position: "bottom",
  //      labels: {
  //        fontColor: "#333",
  //        fontSize: 16
  //      },
  //      elements: {
  //       center: {
  //         text: '',
  //         color: '#FF6384',
  //         fontStyle: 'Arial',
  //         sidePadding: 20,
  //         minFontSize: 25, 
  //         lineHeight: 25 
  //       }
  //    }
  //  } as ChartOptions,
  
  
//};
  ngOnInit(): void {
    this.generate();
    this.cData=chartConfigData;
   // this.data.labels=this.labels;
    this.cData.datasets[0].data=this.empData;
    this.cData.datasets[0].backgroundColor=this.color;
    this.cData.datasets[0].cutout='80%';
    
    Chart.register({
      id:'doughnutCenter',
      beforeDraw:function(chart){debugger;
            var width=chart.chartArea.width,
            height=chart.chartArea.height,
            ctx=chart.ctx;

            ctx.restore();

            var fontSize = (height / 114).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                var text = "Employees",
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2;
                ctx.fillText(text, textX, textY);
                ctx.save();

      }
    });debugger;
    this._chartService.getChartConfig(this.cData).subscribe();
    
  }
generate(){
  this.dataOutput=Array.from({length: 3}, () => Math.floor(Math.random() * 100));
    console.log("gen"+this.dataOutput);
   // var total=this.dataOutput.reduce((a,b)=>a+b);
   this.empData=this.dataOutput;
}
}
