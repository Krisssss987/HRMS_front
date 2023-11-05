import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http: HttpClient, private router: Router) {}
  // private readonly API_URL = 'http://ec2-3-110-121-113.ap-south-1.compute.amazonaws.com:3000';
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

  leaveToday():Observable<any> {
    return this.http.get(`${this.API_URL}/getLeaveByDate`);
  }

  taskSheet():Observable<any> {
    return this.http.get(`${this.API_URL}/getTaskSheet`);
  }
  InternDetails():Observable<any> {
    return this.http.get(`${this.API_URL}/getInternDetails`);
  }
  SupervisiorDetails():Observable<any> {
    return this.http.get(`${this.API_URL}/getSupervisorDetails`);
  }
  assignTask(assignTask: any): Observable<any> {
    return this.http.post(`${this.API_URL}/assignTask`, assignTask);
  }
  updateTask(updateTask: any): Observable<any> {
    return this.http.post(`${this.API_URL}/editTask`, updateTask);
  }
  projectDetails():Observable<any> {
    return this.http.get(`${this.API_URL}/getProjects`);
  }
  deleteTask(taskId: string):Observable<any> {
    return this.http.delete(`${this.API_URL}/deleteTask/${taskId}`);
  }

  deleteEmployee(UserId: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/deleteEmployee/${UserId}`);
  }
  updateEmployee(updatedEmployee: any): Observable<any> {
    // Make a PUT request to update employee data
    // You should define the URL and HTTP headers as needed
    return this.http.put<any>(`${this.API_URL}/editUser`, updatedEmployee);
  }

  Divisions():Observable<any> {
    return this.http.get(`${this.API_URL}/getDesignation`);
  }
  approveLeave(leaveId: string): Observable<any> {
    return this.http.put(`${this.API_URL}/updateLeaveApproval/${leaveId}`, {});
  }
  updateleaveApproval(updateLeave:any):Observable<any>{
    return this.http.put(`${this.API_URL}/updateLeaveApproval`, updateLeave);
  }
  attendanceDetails():Observable<any> {
    return this.http.get(`${this.API_URL}/getAttendenceDetails`);
  }
}
