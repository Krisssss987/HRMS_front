import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashService } from '../../dash.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],

})
export class LeaveComponent  implements OnInit{
  CompanyEmail!: string | null;
  dataSource2: any;
  dataSource3: any;

  ngOnInit():void{
    this.pendingLeave();
    this.declinedLeave();
    this.approvedLeave();
  }

  constructor(
    public snackBar: MatSnackBar,
    public dashService:DashService,
    public router:Router
  ){}

  
  
  pendingLeave() {
    this.CompanyEmail = sessionStorage.getItem('CompanyEmail');
    if (this.CompanyEmail) {
      this.dashService.pendingLeave(this.CompanyEmail).subscribe(
        (users) => {
          this.dataSource = users.getLeaveInfo;
          console.log(users);
          console.log(this.dataSource)

        },
        (error) => {
          // Handle error
        }
      );
    }
  }

  approvedLeave() {
    this.CompanyEmail = sessionStorage.getItem('CompanyEmail');
    if (this.CompanyEmail) {
      this.dashService.approvedLeave(this.CompanyEmail).subscribe(
        (users) => {
          this.dataSource2 = users.getLeaveInfo;
          console.log(this.dataSource2)
        },
        (error) => {
          // Handle error
        }
      );
    }
  }

  declinedLeave() {
    this.CompanyEmail = sessionStorage.getItem('CompanyEmail');
    if (this.CompanyEmail) {
      this.dashService.declinedLeave(this.CompanyEmail).subscribe(
        (users) => {
          this.dataSource3 = users.getLeaveInfo;
          console.log(this.dataSource3)
        },
        (error) => {
          // Handle error
        }
      );
    }
  }
  updateStatus(element: any, newStatus: number) {
    // Assuming your API expects "1" for accepted and "0" for rejected
    const isApprovedValue = newStatus === 1 ? '1' : '0';

    const updatedStatusData = {
      // Add any other data you need to update here
      employeeEmail: element.employeeEmail,
      // ...
      IsApproved: isApprovedValue,
    };

    this.dashService.updateleaveApproval(updatedStatusData).subscribe(
      (response) => {
        // Status updated successfully
        // You may want to reload your data or perform other actions here
        // For example, if you want to refresh the data after the status is updated:
      },
      (error) => {
        // Handle error, show an alert, etc.
      }
    );
  }


  displayedColumns: string[] = ['Date', 'EmployeeName', 'Leave', 'Days', 'Status', 'Actions', 'View'];
  dataSource = new MatTableDataSource<PeriodicElement>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

open(user: PeriodicElement){
  const leaveID = user.LeaveID.toString();
  this.dashService.setLeaveId(leaveID);
  this.router.navigate(['/sa/viewLeave']);
}

}
export interface PeriodicElement {
  Date: number;
  EmployeeName: string;
  Leave: string;
  Days: string;
  Status: string;
  Actions: string;
  Supervisor: string;
  ApprovedReject: string;
  LeaveID:number;
}
  
