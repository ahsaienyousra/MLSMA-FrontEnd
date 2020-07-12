import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from "highcharts-angular";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutputGraphComponent } from './output-graph/output-graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapchartComponent } from './mapchart/mapchart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountrychartComponent } from './countrychart/countrychart.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PredchartComponent } from './predchart/predchart.component';



@NgModule({
  declarations: [
    AppComponent,
    OutputGraphComponent,
    MapchartComponent,
    NavbarComponent,
    CountrychartComponent,
    PredchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
