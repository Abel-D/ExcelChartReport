import { Component, OnInit } from '@angular/core';
import { Chart,ChartOptions } from 'chart.js';

@Component({
  selector: 'app-employees-summary',
  templateUrl: './employees-summary.component.html',
  styleUrls: ['./employees-summary.component.css']
})
export class EmployeesSummaryComponent implements OnInit {
  empData: any[]=[];
  total: any;

  constructor() { }
  data1 = {
   // labels: ["Non Billable", "Bench", "Billable"],
    datasets: [
      {
        label: "",
        data: this.empData,
        backgroundColor: [
          "#DEB887",
          "#A9A9A9",
          "#DC143C",
         
        ],
        borderColor: [
          "#CDA776",
          "#989898",
          "#CB252B",
         
        ],
        borderWidth: [1,1,1],
        cutout:'80%'
      }
    ]
  };
  options:any={
    maintainAspectRatio:false, 
     responsive: true,
     borderJoinStyle:"bevel",
     title: {
       display: true,
       position: "top",
       text: "",
       fontSize: 18,
       fontColor: "#111"
     },
     legend: {
      
       rotation:Math.PI*2,
       display: false,
       position: "bottom",
       labels: {
         fontColor: "#333",
         fontSize: 16
       },
       elements: {
        center: {
          text: '',
          color: '#FF6384', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20, // Default is 20 (as a percentage)
          minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
          lineHeight: 25 // Default is 25 (in px), used for when text wraps
        }
     }
   } as ChartOptions,
  
  
};
  ngOnInit(): void {
    this.generate();
    this.data1.datasets[0].data=this.empData;
    console.log(this.empData)
  }
  generate(){
  this.empData=Array.from({length: 3}, () => Math.floor(Math.random() * 100));
 
 this.total=this.empData.reduce((a,b)=>a+b);

  }
}
