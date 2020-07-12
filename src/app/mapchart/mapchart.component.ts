declare var require: any;

import { Component, OnInit } from '@angular/core';
import ExportingModule from 'highcharts/modules/exporting';

import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { OutputGraphService } from './../services/output-graph.service'
import * as Highcharts from 'highcharts/highmaps';
import MapModule from 'highcharts/modules/map';
import mapdata from "./mapdata";
const world = require('@highcharts/map-collection/custom/world.geo.json');

mapdata(Highcharts);

@Component({
  selector: 'app-mapchart',
  templateUrl: './mapchart.component.html',
  styleUrls: ['./mapchart.component.css']
})
export class MapchartComponent implements OnInit {
  stats: any;
  //fetchdata_json = new Array();
  title = "app";
  chart;
  chartOptions={};
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartCallback;

refresh(){
  this.api.Cluster().subscribe((res:any)=>{
    this.stats = res.result;
    var fetchdata_json = new Array();   
    for (let i = 0; i < this.stats.length; i++){
      fetchdata_json.push({code:this.stats[i].code,
        value:this.stats[i].value, name:this.stats[i].name});
    }

  this.chartOptions = {
    chart: {
      map: world,
    },
    title: {
      text: 'Mortality Rate Map'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    colorAxis: {
      minColor: 'rgba(196, 0, 0, 0.1)',
      maxColor: 'rgba(196, 0, 0, 1)'
    },

    tooltip: {
      headerFormat: '<b>{point.point.name}</b><br>',
      footerFormat: '<span style="font-size: 10px"></span>'
    },
    legend: {
      title: {
        text: 'Cluster',
        style: {
          fontWeight: 'normal'
        }
      }
    },
    series: [{
      name: 'Countries',
      color: '#E0E0E0',
      enableMouseTracking: false
    },
    {
      type: 'map',
      data: fetchdata_json,
      joinBy: ['iso-a3', 'code'],
      minSize: 4,
      maxSize: '12%',
      states: {
        hover: {
          color: '#a4edba'
        }
      },
      tooltip: {
        pointFormat: '{point.properties.hc-a2}: Cluster {point.value} '
      }
    }]

  }
})
}

  constructor(private api: OutputGraphService) {
    
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
    };
    this.refresh();
  }

  ngOnInit() { }
}
