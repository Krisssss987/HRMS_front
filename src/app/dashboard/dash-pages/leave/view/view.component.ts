import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashService } from 'src/app/dashboard/dash.service';
import { AuthService } from 'src/app/login/auth/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  ngOnInit(): void {
    this.fetchleaveData();
    this.fetchLeaveId();
  }

  constructor(private authService:AuthService, private DashDataService:DashService,public snackBar: MatSnackBar){}

  subject!:string;
  name!:string;
  type!:string;
  total!:string;
  start!:string;
  end!:string;
  supervisor!:string;
  discussion!:string;
  contact!:string;
  task!:string;
  status!:string;
  leaveId: string ='';
  Id: string ='';

  leaveData = {
    isApproved:'Declined'
  };

  fetchLeaveId() {
    this.DashDataService.leaveId$.subscribe(
      (id) => {
        this.Id=id;
        this.fetchleaveData();
      },
      (error) => {
        console.error('Error fetching leave ID', error);
      }
    );
  }

  fetchleaveData() {
    this.leaveId = this.Id;
    if (this.leaveId) {
      this.DashDataService.leaveDetails(this.leaveId).subscribe(
        (leaveData) => {
          this.subject=leaveData.getLeaveInfo[0].ReasonForLeave;
          this.name=leaveData.getLeaveInfo[0].FirstName+' '+leaveData.getLeaveInfo[0].LastName;
          this.type=leaveData.getLeaveInfo[0].TypeOfLeave;
          this.total=leaveData.getLeaveInfo[0].TotalLeaveDays;
          this.start=leaveData.getLeaveInfo[0].StartDate;
          this.end=leaveData.getLeaveInfo[0].EndDate;
          this.supervisor=leaveData.getLeaveInfo[0].SupervisorName;
          this.discussion=leaveData.getLeaveInfo[0].DiscussWithSupervisor;
          this.contact=leaveData.getLeaveInfo[0].EmergencyContact;
          this.task=leaveData.getLeaveInfo[0].PendingTaskDetails;
          this.status=leaveData.getLeaveInfo[0].IsApproved;
        },
        (error) => {
          this.snackBar.open('Error for getting details!', 'Dismiss', {
            duration: 2000
          });
        }
      );
    } 
  }
  approveLeave() {
    this.leaveId = this.Id;
    if(this.leaveId){
      this.DashDataService.updateleaveApproval(this.leaveData,this.leaveId).subscribe(
        () => {
          this.snackBar.open('Leave Approved Successfully!', 'Dismiss', {
            duration: 2000
          });
        },
        (error) => {
          this.snackBar.open(
            error.error.message || 'Failed to Approve leave. Please try again.',
            'Dismiss',
            { duration: 2000 }
          );
        }
      )
    }
  }
  
  getStatusColor(status: string): string {
    if (status === '1') {
      return 'green'; // Set the color for 'Accepted'
    } else if (status === '0') {
      return 'red'; // Set the color for 'Rejected'
    } else {
      return 'yellow'; // Default color
    }
  }
  
}
