import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


}


// $(function () {
//     $('#container').highcharts({

//         chart: {
//             type: 'bubble',
//             zoomType: 'xy',
//             xheight:100,
//             plotBorderWidth: 0,
//             margin: [0,0,0,0],

//         },
//         title: {
//             text: 'Unique Cookies'
//         },
//          subtitle: {
//           align: 'center',
//           text: 'By Channel'
//         },
//          credits : {
//             enabled : false
//         },
//         xAxis: {
//             lineWidth: 0,
//             lineColor: 'transparent',
//             labels: {
//                 enabled: false
//             },
//             title: { text: null },
//             categories: ['A', 'B'],
//         },

//         yAxis: {
//         	  gridLineWidth: 0,
//             lineColor: 'transparent',
//             labels: {
//                 enabled: false
//             },
//             title: { text: null },
//         },

//          plotOptions: {
//             bubble:{
//                	minSize:100,
//                 maxSize:200
//             },
//         series: {
//                 dataLabels: {
//                     style: {
//                         color: 'black'
//                     },
//                     inside: true,
//                     y:0,
//                     overflow: false,
//                    // crop: false,
//                     enabled: true,
//                     useHTML:true,
//                     formatter:function(){
//                       return  `<span>
//                        							${this.series.name} <br>
//                                 		${this.series.data[0].z}
//                                 </span>`;
//                     }
//             }
//         }
//         },
//         legend: {
//             enabled: true
//         },

//         series: [
//         {
//           	name: 'Reach',
//             lineWidth: 0,
//             data: [
//                 [0, 0, 10000]
//              ],
//         }, {
//             name: 'Impressions',
//             lineWidth: 0,
//             data: [
//                 [1, 0, 500000]
//             ],
//         }]


//     });

// });
