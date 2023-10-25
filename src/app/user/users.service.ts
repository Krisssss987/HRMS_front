import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) {}
  // private readonly API_URL = 'http://ec2-3-110-121-113.ap-south-1.compute.amazonaws.com:3000';
  private readonly API_URL = 'http://localhost:3000';

  leaveApp(internleave: any): Observable<any> {
    return this.http.post(`${this.API_URL}/leave`, internleave);
  }
}
