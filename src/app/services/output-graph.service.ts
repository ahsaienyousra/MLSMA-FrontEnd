import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})

export class OutputGraphService {
  api_url: string;

  constructor(private http : HttpClient ) {
    this.api_url = environment.api_url;
  }

  findAll(){
    return this.http.get(this.api_url+"/totalconfirmed").pipe(
      catchError(err => {
        if (err.status === 401) console.log("unthdqshdqshd");
        else
        return of(err);
      })
    );;
  }
  
  Cluster(){
    return this.http.get(this.api_url+"clustering").pipe(
      catchError(err => {
        if (err.status === 401) console.log("hi");
        else
        return of(err);
      })
    );;
  }
  deaths(){
    return this.http.get(this.api_url+"/deaths").pipe(
      catchError(err => {
        if (err.status === 401) console.log("hi");
        else
        return of(err);
      })
    );;
  }
  getCountry(){
    return this.http.get(this.api_url+"/country").pipe(
      catchError(err => {
        if (err.status === 401) console.log("hi");
        else
        return of(err);
      })
    );;
  }
  getData(country){
    return this.http.get(this.api_url+"newcases/"+country).pipe(
      catchError(err => {
        if (err.status === 401) console.log("");
        else
        return of(err);
      })
    );;
  }
  predict(){
    return this.http.get(this.api_url+"predict").pipe(
      catchError(err => {
        if (err.status === 401) console.log("");
        else
        return of(err);
      })
    );;
  }
}
