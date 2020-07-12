import { Component, OnInit } from '@angular/core';
import {OutputGraphService} from './../services/output-graph.service';
import * as Highcharts from 'highcharts';
import {
  startOfMonth,
  format
} from "date-fns";

@Component({
  selector: 'app-predchart',
  templateUrl: './predchart.component.html',
  styleUrls: ['./predchart.component.css']
})
export class PredchartComponent implements OnInit {
  stats:any;
  Highcharts = Highcharts;
  charts:Highcharts.Chart[]=[];
  outputChartOptions:Highcharts.Options;

  refresh(){
    this.api.predict().subscribe((res:any)=>{
      this.stats = res.result;
      var fetchdata_json = new Array();
      for (let i = 0; i < this.stats.length; i++){
        fetchdata_json.push([this.stats[i].Predicted, this.stats[i].Actual]);
      }
      let startDate = new Date(res.date);
      let pointInterval = 24 * 3600 * 1000;
      console.log(res.date);
  this.outputChartOptions = {
    title:{
      text:"Deaths Cases "
    },
    yAxis: {
        title: {
          text: "Deaths number"
        }
      }
    ,xAxis: {
        type:'datetime'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },
    series: [
      {
        data: this.stats.map((el:any,index)=>[el.Actual]),
        name: 'Total deaths',
        type: "line",
        pointStart: startDate.getTime(),
        pointInterval

      },
      {
        data: this.stats.map((el:any,index)=>[el.Predicted]),
        name: 'Total Predicted',
        type: "line",
        pointStart: startDate.getTime(),
        pointInterval

      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
 }
 console.log(fetchdata_json);
    })
  }
  constructor(private api : OutputGraphService) {
    this.refresh();
   }

  ngOnInit(): void {
  }

}
