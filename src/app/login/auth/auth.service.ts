import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private token!: string;
  private Designation!: string;
  
  constructor(private http: HttpClient, private router: Router) {}
  private readonly API_URL = 'http://localhost:3000';

  register(registerData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, registerData);
  }

  setToken(token: string): void {
    this.token = token;
    sessionStorage.setItem('token', token);
    this.getUserDetails();
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

  setCompanyEmail(CompanyEmail: string){
    sessionStorage.setItem('CompanyEmail', CompanyEmail);
  }

  getCompanyEmail(): string | null {
    return sessionStorage.getItem('CompanyEmail');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
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

            const userId = user.UserId;
            sessionStorage.setItem('UserId', userId);
          },
          (error: any) => {
            console.error(error);
          }
        );
    }
  }


}
