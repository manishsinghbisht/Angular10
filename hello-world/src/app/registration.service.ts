import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:3000/enroll';
  constructor(private _httpClient: HttpClient) { }

  register(userData){
    return this._httpClient.post<any>(this._url, userData);
  }
}
