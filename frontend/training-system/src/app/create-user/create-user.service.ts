import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  private baseUrl = 'http://localhost:8080/createuser';

  constructor(private http: HttpClient) {}

  createEmployee(employeeData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<string>(this.baseUrl, employeeData, httpOptions);
  }
}