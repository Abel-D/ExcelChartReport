export const chartConfigData = {
    labels: [],
    datasets: [
      {
        label:[],
        data: [],
        backgroundColor:[],
        borderColor: [
         ],
        borderWidth: [1,1,1,1,1],
        cutout:'90%',
        offset:10
      }
    ]
  };
  export const chartOptions:any={
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
          text: '',
          color: '#FF6384',
          fontStyle: 'Arial',
          sidePadding: 20,
          minFontSize: 25, 
          lineHeight: 25 
        }
     }
   } ,
  
  
};