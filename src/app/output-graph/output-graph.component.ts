import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import {OutputGraphService} from './../services/output-graph.service'

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.css']
})
export class OutputGraphComponent implements OnInit {

  stats:any;
  Highcharts = Highcharts;
  charts:Highcharts.Chart[]=[];
  outputChartOptions:Highcharts.Options;
  piechartsOption:Highcharts.Options;
  deathschartsOption:Highcharts.Options;

  constructor(private api : OutputGraphService){
    this.refresh();
    this.getDeaths();
  }

  refresh() {
    this.api.findAll().subscribe((res:any)=>{
      this.stats = res.result;
      var fetchdata_json = new Array();   
      for (let i = 0; i < this.stats.length; i++){
        fetchdata_json.push([this.stats[i].Country, this.stats[i].Confirmed_cases]);
    }
      this.outputChartOptions = {
        chart: {
          //type: 'bar'
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
            text: "Countries"
          }
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
        series: [
          {
            data: fetchdata_json,
            name: 'Confirmed Cases',
            type: "column",
            colorByPoint: true,
            showInLegend: false
           
          }
        ]

      }
      

      this.piechartsOption = {
        chart:{
          plotBackgroundColor:null,
          plotBorderWidth:null,
          type:"pie"
        },
        title:{
          text:"Confirmed cases",
        },
        tooltip:{
          pointFormat: '{series.Confirmed_cases}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions:{
          pie:{
            allowPointSelect:true,
            cursor:"pointer",
            showInLegend:false,
          },

        },
        series:[
          {
            type:"pie",
            name: 'Confirmed Cases',
            data: fetchdata_json
          }
        ]
        
      }
    })

  }

  ngOnInit(){}

  getDeaths(){
    this.api.deaths().subscribe((res:any)=>{
      this.stats = res.result;
      var fetchdata_json = new Array();   
      for (let i = 0; i < this.stats.length; i++){
        fetchdata_json.push([this.stats[i].Country, this.stats[i].deaths]);
    }
    
    this.deathschartsOption = {
      chart:{
        plotBackgroundColor:null,
        plotBorderWidth:null,
        type:"pie"
      },
      title:{
        text:"deaths cases",
      },
      tooltip:{
        pointFormat: '{series.deaths}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions:{
        pie:{
          allowPointSelect:true,
          cursor:"pointer",
          showInLegend:false,
        },

      },
      series:[
        {
          type:"pie",
          name: 'deaths Cases',
          data: fetchdata_json
        }
      ]
      
    }

  })

}}
