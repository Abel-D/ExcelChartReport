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
  total: number=0;
  chartType="doughnut"

  constructor(private _chartService:ChartService) { }
 
  ngOnInit(): void {
    this.generate();
   
    this.cData=chartConfigData;
   // this.cData as ChartOptions;
    this.cData.datasets[0].label=this.labels;
    console.log(this.cData.datasets[0].label)
    this.cData.datasets[0].data=this.empData;
    this.cData.datasets[0].backgroundColor=this.color;
    this.cData.datasets[0].borderColor=this.color;
    this.cData.datasets[0].cutout='80%';
    this.cData.datasets[0].offset=0;
    this.total=this.dataOutput.reduce((a,b)=>a+b);
    
    Chart.register({
      id:'doughnutCenter',
      beforeDraw:function(chart){
            var width=chart.chartArea.width,
            height=chart.chartArea.height,
            ctx=chart.ctx;

            ctx.restore();

            var fontSize = (height / 114).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                
                var text = " Employees",
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2;
                ctx.fillText(text, textX, textY);
                ctx.save();

      }
    },
    {
      id:"LabelLines",
      afterDraw(chart,args,options){
        const {ctx,chartArea:{top,bottom,left,right,width,height}}=chart;

        console.log("top"+top)
        console.log("chart"+chart.data.datasets)

//loop through each chart dataset
        chart.data.datasets.forEach((dataset,i)=>{
        console.log("ds"+chart.getDatasetMeta(i))

//loop through each dataset props
        chart.getDatasetMeta(i).data.forEach((datapoint,index)=>{
        const {x,y}=datapoint.tooltipPosition()
        console.log("dp"+datapoint.tooltipPosition())
        
           ctx.fillStyle='black';
        
           ctx.fillRect(x,y,1,1);

// line draw
          const widthHalf=width/2;
          const heightHalf=height/2;

          const xLine=x>=widthHalf? x+15:x-15;
          const yLine=y>=heightHalf? y+15:y-15;
          ctx.beginPath();
          ctx.moveTo(x,y);
          ctx.lineTo(xLine,yLine);
          if(!chart.data.labels) return;
          ctx.strokeStyle=chart.data.datasets[0].label as string;
          ctx.stroke();

 // add label
      if(!chart.data.datasets[0].label) return;
   
        const txtWidth=ctx.measureText(chart.data.datasets[0].label[index] as string).width;
        console.log(txtWidth)   
       // ctx.font=''    
       ctx.fillText(chart.data.datasets[0].label[index] as string,xLine,yLine)
      })
       })
      }

    }
    )
    this._chartService.getChartConfig(this.cData).subscribe();
    
  }
generate(){
  this.dataOutput=Array.from({length: 3}, () => Math.floor(Math.random() * 100));
    console.log("gen"+this.dataOutput);
   this.total=this.dataOutput.reduce((a,b)=>a+b);
   this.empData=this.dataOutput;
}

}