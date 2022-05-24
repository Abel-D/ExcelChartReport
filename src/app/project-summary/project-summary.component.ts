import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';
import ChartDataLabels  from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {
  proData: any=[34,22];

  constructor() { }
  doughnutCenter={
    id:'doughnutCenter',
    
    beforeDraw:function(chart:Chart){
          var width=chart.chartArea.width,
          height=chart.chartArea.height,
          ctx=chart.ctx;

//try to config chart area***

          ctx.restore();
         
          var fontSize = (height / 114).toFixed(2);
              ctx.font = fontSize + "Arial";
             // ctx.font.bold;
              ctx.textBaseline = "middle";
              ctx.font = "bold 14pt Helvetica";
               // @ts-ignore: Object is possibly 'null'.
               var total=chart.data.datasets[0].data.reduce((a,b)=>a+b);
              var text = total+""+"Projects",
                  textX = Math.round((width - ctx.measureText(text).width) / 2),
                  textY = height / 2;
                  ctx.fillText(text , textX,  textY+30);
              ctx.save();

    }
  };
  LabelLines={
    id:"LabelLines",
    afterDraw(chart:Chart,args:any,options:any){
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
         // if (!dataset.backgroundColor) return;
         // @ts-ignore: Object is possibly 'null'.
           ctx.fillStyle=chart.data.datasets[0]?.backgroundColor[index] as string;
        //mark center of section
           ctx.fillRect(x,y,0.5,0.5);

// line draw
          const widthHalf=width/2;
          const heightHalf=height/2;

          const xLine=x>=widthHalf? x-15:x+15;
          const yLine=y>=heightHalf? y+15:y-15;
          ctx.beginPath();
          ctx.moveTo(x,y);
          ctx.lineTo(xLine,yLine);
          if(!chart.data.labels) return;

          //show text label
          // @ts-ignore: Object is possibly 'null'.
        ctx.strokeStyle=dataset.backgroundColor[index];
        ctx.lineWidth=5;
          ctx.stroke();

 // add label
        
 const txtWidth=ctx.measureText(chart.data.datasets[0].data[index] as unknown as string +chart.data.labels[index] as string).width;
 console.log(txtWidth)   
        ctx.font='10px Arial';    
        ctx.fillText(chart.data.datasets[0].data[index] as unknown as string,xLine+20,yLine-30);
        ctx.fillText(chart.data.labels[index] as string,xLine,yLine)
      })
     })
    }
  };
  ngOnInit(): void {

  }
  data1 = {
    labels: ["Internal", "Client"],
    datasets: [
      {
        label: "",
        data: this.proData,
        backgroundColor: [
          "#7F38EC",
          "#43C6DB",
                  
        ],
        borderColor: [
          "#7F38EC",
          "#43C6DB",
                 
        ],
        borderWidth: [1,1],
        cutout:'80%',
        offset:0
      }
    ]
  };
  options={
    plugins: {
      legend: {
          display: false
      },
     maintainAspectRatio:false, 
     responsive: true,
     borderJoinStyle:"bevel",
     title: {
       display: true,
       position: "top",
       text: "",
       fontSize: 18,
       fontColor: "#111"
     }  } as ChartOptions,
  //      legend: {
      
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
  //         color: '#FF6384', // Default is #000000
  //         fontStyle: 'Arial', // Default is Arial
  //         sidePadding: 20, // Default is 20 (as a percentage)
  //         minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
  //         lineHeight: 25 // Default is 25 (in px), used for when text wraps
  //       }
  //    }
  //  } as ChartOptions,
 
}
}