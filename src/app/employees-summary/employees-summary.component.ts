import { Component, OnInit } from '@angular/core';
import { Chart,ChartOptions } from 'chart.js';

@Component({
  selector: 'app-employees-summary',
  templateUrl: './employees-summary.component.html',
  styleUrls: ['./employees-summary.component.css']
})
export class EmployeesSummaryComponent implements OnInit {
  empData: any[]=[];

  constructor() { }
  data1 = {
    labels: ["match1", "match2", "match3", "match4", "match5"],
    datasets: [
      {
        label: "TeamA Score",
        data: this.empData,
        backgroundColor: [
          "#DEB887",
          "#A9A9A9",
          "#DC143C",
          "#F4A460",
          "#2E8B57"
        ],
        borderColor: [
          "#CDA776",
          "#989898",
          "#CB252B",
          "#E39371",
          "#1D7A46"
        ],
        borderWidth: [1,1,1,1,1],
        cutout:'90%'
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
       text: "Doughnut Chart",
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
          text: 'Red is 2/3s',
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
  }

}
