import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DashService } from 'src/app/dashboard/dash.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  EmployeeName = new FormControl('', [Validators.required]);
  employeeOptions: any = [];
  supervisorOptions: any = [];
  projectTitle: any = [];
  Status= new FormControl('', [Validators.required]);

  Supervisor= new FormControl('', [Validators.required]);
  Projecttitle = new FormControl('', [Validators.required]);
  Remarks = new FormControl('', [Validators.required]);
  Priority = new FormControl('', [Validators.required]);
  StartDate = new FormControl('', [Validators.required]);
  EndDate = new FormControl('', [Validators.required]);

  filteredOptions: Observable<string[]> | undefined;
  userEmail!: string;
  userName!: string;
  projectName: any;
  usersupervisorEmail!:string;
  usersupervisorName!:string;

  constructor(
    public dashService:DashService, public dialogRef:MatDialogRef<AssignTaskComponent> ) {}

  ngOnInit() {
    this.EmployeeList();
    this.SupervisiorList();
    this.projectTitleList();
  }
  
  CompanyEmail!: string | null;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  });
  
     EmployeeList(){
      this.dashService.InternDetails().subscribe(
        (InternDetails) =>{
          this.employeeOptions = InternDetails.getInternDetails; 
        },
        (error) =>{
          console.log("Tasksheet Data is not Fetching!!", error);
        }
      );
    }

    SupervisiorList(){
      this.dashService.SupervisiorDetails().subscribe(
        (supervisor) =>{
          console.log("Supervisior List", supervisor.getSupervisiorDetails);
          this.supervisorOptions = supervisor.getSupervisiorDetails;
        },
        (error) =>{
          console.log("Tasksheet Data is not Fetching!!", error);
        }
      );
    }

    projectTitleList(){
      this.dashService.projectDetails().subscribe(
        (projects) =>{
          console.log("Project List", projects.getProjectName);
          this.projectTitle = projects.getProjectName;
        },
        (error) =>{
          console.log("Data is not Fetching!!", error);
        }
      );
    }


    open(employeeOptions: any) {
      this.userEmail = employeeOptions.CompanyEmail;
      this.userName = employeeOptions.FirstName + "" + employeeOptions.LastName;
      console.log(this.userEmail);
    }
    open1(supervisorOptions:any){
      this.usersupervisorEmail= supervisorOptions.CompanyEmail
      this.usersupervisorName=  supervisorOptions.FirstName + "" + supervisorOptions.LastName;
    }
    
    SaveTaskSheet() {
      if (
        this.EmployeeName.valid &&
        this.Supervisor.valid &&
        this.Projecttitle.valid &&
        this.Status.valid &&
        this.Remarks.valid &&
        this.Priority.valid &&
        this.StartDate.valid &&
        this.EndDate.valid
      ) {
        const startDate = this.StartDate.value ? new Date(this.StartDate.value) : null;
        const endDate = this.EndDate.value ? new Date(this.EndDate.value) : null;
    
        if (startDate && endDate) {
          const taskSheetData = {
            "employeeEmail": this.userEmail,
            "employeeName": this.userName,
            "supervisorEmail": this.usersupervisorEmail,
            "supervisorName": this.usersupervisorName,
            "projectTitle": this.Projecttitle.value,
            "status": this.Status.value,
            "remarks": this.Remarks.value,
            "priority": this.Priority.value,
            "startDate": this.formatDateToString(startDate), // Format start date
            "endDate": this.formatDateToString(endDate) // Format end date
          };
    
          this.dashService.assignTask(taskSheetData).subscribe(
            () => {
               // Reset the form control
               this.dialogRef.close();
              Swal.fire({
                icon: 'success',
                title: 'Task Assigned',
                text: 'Task has been assigned successfully!',
              });
    
             
            },
            (error) => {
              if (error.status === 401) {
                // Show an unauthorized alert using Swal
                Swal.fire({
                  icon: 'error',
                  title: 'Unauthorized',
                  text: 'Please log in or check your credentials.',
                });
              } else {
                // Show a generic error alert using Swal
                Swal.fire({
                  icon: 'error',
                  title: 'Error Occurred',
                  text: 'An error occurred while assigning the task. Please try again.',
                });
              }
            }
          );
        } else {
          // Show an invalid date format alert using Swal
          Swal.fire({
            icon: 'error',
            title: 'Invalid Date Format',
            text: 'Please enter valid start and end dates.',
          });
        }
      } else {
        // Show an alert for incomplete form using Swal
        Swal.fire({
          icon: 'warning',
          title: 'Incomplete Form',
          text: 'Please fill in all the required fields.',
        });
      }
    }
    
    
    formatDateToString(date: Date): string {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
    
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
}
