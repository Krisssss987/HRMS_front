import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employeeName = 'Yatharth Deshpande';
  contactNumber = '0123465789';
  emailAddress = 'yatharthdeshpande724@gmail.com';
  dateOfBirth = '15/09/2002';
  dateOfJoining = '19/07/2023';
  endDate = '19/1/2024';
}
