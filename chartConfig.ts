import { ChartOptions } from "chart.js"

export interface ChartData {
    labels:string[],
    datasets:ChartDataset[],
    options:ChartOption
}

export interface ChartDataset{
        label:string[],
        data: any[],
        backgroundColor:string[],
        borderColor?:string[],
        borderWidth?: any[],
        cutout:string, //number+'%'
        offset?:number
}

export interface ChartOption{
   
        maintainAspectRatio:boolean, 
         responsive: boolean,
        title: {},
        legend:Legend
    }
    export interface Legend
        {
            rotation:any,
            display: boolean,
            position: String,
            labels?: Labels,
            elements:Elements
        } 
    
       export interface Elements{
           center?: Center
         }
         export interface Center
            {
                text: string
                  color:string,
                fontStyle: 'Arial',
                sidePadding: 20,
                minFontSize: 25, 
                lineHeight: 25 
              }
         
         export interface Labels{
            
                fontColor: string,
                fontSize: number
              
         }
       
    