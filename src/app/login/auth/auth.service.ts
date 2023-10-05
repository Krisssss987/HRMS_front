import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private router: Router) {}
  private readonly API_URL = 'http://localhost:3000';

  register(registerData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, registerData);
  }

  forgot(forgotData: any) : Observable<any> {
    return this.http.post(`${this.API_URL}/forgot`,forgotData)

  }

  reset(resetData: any): Observable<any>{
    return this.http.post(`${this.API_URL}/reset`, this.resetData)
  }
  resetData(arg0: string, resetData: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  



}
