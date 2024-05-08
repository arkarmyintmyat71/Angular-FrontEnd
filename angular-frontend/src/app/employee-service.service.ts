import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl = "http://localhost:8001/api/v1/employee/detail" ;

  constructor(private httpClient : HttpClient) { }

  getEmployee() : Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }
}
