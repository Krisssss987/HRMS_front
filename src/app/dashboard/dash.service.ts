import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http: HttpClient, private router: Router) {}
  //private readonly API_URL = 'http://ec2-3-110-121-113.ap-south-1.compute.amazonaws.com:3000';
  private readonly API_URL = 'http://localhost:3000';
  private leaveIdSource = new BehaviorSubject<string>('');
  leaveId$ = this.leaveIdSource.asObservable();

  setLeaveId(leaveId: string) {
    this.leaveIdSource.next(leaveId);
  }

  getLeaveId(): string {
    return this.leaveIdSource.value;
  }

  addUser(userRegister: any): Observable<any> {
    return this.http.post(`${this.API_URL}/addUser`, userRegister);
  }

  userDetails(userDetails: any): Observable<any> {
    return this.http.get(`${this.API_URL}/getUserDetails`,userDetails);
  }
  userDevices(CompanyEmail: string): Observable<any> {
    return this.http.get(`${this.API_URL}/getUserDetails`);
  }

  pendingLeave(pendingLeave: any): Observable<any> {
    return this.http.get(`${this.API_URL}/pendingLeaveInfo`,pendingLeave);
  }
  approvedLeave(approvedLeave: any): Observable<any> {
    return this.http.get(`${this.API_URL}/approvedLeaveInfo`,approvedLeave);
  }
  declinedLeave(declinedLeave: any): Observable<any> {
    return this.http.get(`${this.API_URL}/rejectedLeaveInfo`,declinedLeave);
  }

  leaveDetails(leaveId: string):Observable<any> {
    return this.http.get(`${this.API_URL}/getLeaveInfo/${leaveId}`);
  }

  leaveToday(leaveDate : any):Observable<any> {
    return this.http.get(`${this.API_URL}/getLeaveByDate`,leaveDate);
  }
}
