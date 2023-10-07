import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Designation!: string;
  private CompanyEmail!: string;
  private token!: string;

  encryptUsers!: any;
  decryptUsers!: any;
  
  constructor(private http: HttpClient, private router: Router) {}
  private readonly API_URL = 'http://ec2-3-110-121-113.ap-south-1.compute.amazonaws.com:3000';
  //private readonly API_URL = 'http://localhost:3000';

  register(registerData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, registerData);
  }
  
  login(loginData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, loginData);
  }

  setToken(token: string): void {
    this.token = token;
    sessionStorage.setItem('token', token);
    this.getUserDetails();
  }

  forgot(forgotData: any) : Observable<any> {
    return this.http.post(`${this.API_URL}/forgot`,forgotData)

  }

  reset(resetData: any): Observable<any>{
    return this.http.post(`${this.API_URL}/reset-password`, resetData)
  }
  resetData(arg0: string, resetData: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  getToken(): string | null {
    return this.token || sessionStorage.getItem('token');
  }

  setDesignation(Designation: string) {
    sessionStorage.setItem('Designation', Designation);
  }

  getDesignation(): string | null {
    return sessionStorage.getItem('Designation');
  }

  setUserId(UserId: string){
    sessionStorage.setItem('UserId', UserId);
  }

  getUserId(): string | null {
    return sessionStorage.getItem('UserId');
  }

  setFirstName(FirstName: string){
    sessionStorage.setItem('FirstName', FirstName);
  }

  getFirstName(): string | null {
    return sessionStorage.getItem('FirstName');
  }

  setLastName(LastName: string){
    sessionStorage.setItem('LastName', LastName);
  }

  getLastName(): string | null {
    return sessionStorage.getItem('LastName');
  }

  setSupervisor(Supervisor: string){
    sessionStorage.setItem('Supervisor', Supervisor);
  }

  getSupervisor(): string | null {
    return sessionStorage.getItem('Supervisor');
  }

  setCompanyEmail(CompanyEmail: string){
    sessionStorage.setItem('CompanyEmail', CompanyEmail);
  }

  getCompanyEmail(): string | null {
    return sessionStorage.getItem('CompanyEmail');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    sessionStorage.removeItem('token'); // Clear the token
    this.isLoggedIn(); // Set the logged-in status to false
    this.setDesignation(''); // Clear the user type
    this.router.navigate(['']); // Additional cleanup or redirect logic can be added here
  }

  getUserDetails(): void {
    const token = this.getToken();
    if (token && !this.Designation) {
      // Make a request to fetch user details using the token
      this.http.get(`${this.API_URL}/user`, { headers: { Authorization: `Bearer ${token}` } })
        .subscribe(
          (user: any) => {
            const Designation = user.Designation;
            this.setDesignation(Designation);

            const CompanyEmail = user.CompanyEmail;
            this.setCompanyEmail(CompanyEmail);

            const UserId = user.UserId;
            this.setUserId(UserId);

            const FirstName = user.FirstName;
            this.setFirstName(FirstName);

            const LastName = user.LastName;
            this.setLastName(LastName);

            const Supervisor = user.Supervisor;
            this.setSupervisor(Supervisor);
          },
          (error: any) => {
            console.error(error);
          }
        );
    }
  }

}
