import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {
  proData: any=[34,22];

  constructor() { }

  ngOnInit(): void {
  }
  data1 = {
   // labels: ["Non Billable", "Bench", "Billable"],
    datasets: [
      {
        label: "TeamA Score",
        data: this.proData,
        backgroundColor: [
          "#DEB887",
          "#A9A9A9",
                  
        ],
        borderColor: [
          "#CDA776",
          "#989898",
                 
        ],
        borderWidth: [1,1,1],
        cutout:'70%',
        offset:10
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
 
}
}