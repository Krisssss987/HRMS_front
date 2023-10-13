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
  
