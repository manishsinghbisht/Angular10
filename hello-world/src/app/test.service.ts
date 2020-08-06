import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {IEmployee} from './employee';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _url: string = "/assets/data/employees.json"

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(map(data => {
      return data;}), 
      catchError(
        //error => {return Observable.throw(error.message || "Server error!");}
        this.errorHandler
      )
    );
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server error!")
  }
  

  getStaticEmployees() {
    return [
      { "Id": 1, "name": "Andrew", "age": 30 },
      { "Id": 2, "name": "Steve", "age": 31 },
      { "Id": 3, "name": "Rita", "age": 32 },
      { "Id": 4, "name": "Sam", "age": 33 },
    ];
  }

}
