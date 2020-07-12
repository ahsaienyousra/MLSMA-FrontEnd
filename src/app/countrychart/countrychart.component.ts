import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import {OutputGraphService} from './../services/output-graph.service'
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-countrychart',
  templateUrl: './countrychart.component.html',
  styleUrls: ['./countrychart.component.css']
})
export class CountrychartComponent implements OnInit {
  stats:any;
  public listCountry: Array<string> = []
  Highcharts = Highcharts;
  charts:Highcharts.Chart[]=[];
  outputChartOptions:Highcharts.Options;

  constructor(private api : OutputGraphService,private httpClient : HttpClient ) {
    this.dropdownrefresh();
   }
  dropdownrefresh(){
    this.api.getCountry().subscribe((data:any)=>{
      this.stats = data.result; 
      for (let i = 0; i < this.stats.length; i++){
        this.listCountry.push([this.stats[i]].toString());
    } 
  })
  }
  ngOnInit(): void {
  }

  getname(country?:any){
    this.api.getData(country).subscribe((data:any)=>{
      console.log(data)
      var fetchdata_json = new Array();   
      for (let i = 0; i < data.length; i++){
        fetchdata_json.push([data[i].date, data[i].total_cases]);
    }
      this.outputChartOptions = {
        chart: {

        },

        title:{
          text:"Confirmed cases "
        },
        yAxis: {
            title: {
              text: "Cases number"
            }
          }
        ,xAxis: {
          type: 'category',
          title: {
            text: "date"
          }
          
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          },
          
          series: {
            label: {
              connectorAllowed: false
            }
          }
        },
        data:{switchRowsAndColumns: true},
        series: [
          {
            data: fetchdata_json,
            
            name: 'Confirmed Cases',
            type: "line",
            colorByPoint: true,
            showInLegend: false
           
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
     })

}
}