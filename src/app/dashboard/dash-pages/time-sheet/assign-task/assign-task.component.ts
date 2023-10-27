import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DashService } from 'src/app/dashboard/dash.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  EmployeeName = new FormControl('', [Validators.required]);
  employeeOptions: any = [];
  supervisorOptions: any = [];

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

  constructor(
    public dashService:DashService, ) {}

  ngOnInit() {
    this.EmployeeList();
    this.SupervisiorList();
    this.projectTitle();
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
          this.supervisorOptions = supervisor.getSupervisiorDetails;
        },
        (error) =>{
          console.log("Tasksheet Data is not Fetching!!", error);
        }
      );
    }

    projectTitle(){
      this.dashService.projectDetails().subscribe(
        (projects) =>{
          this.projectName = projects.getProjectName;
        },
        (error) =>{
          console.log("Data is not Fetching!!", error);
        }
      );
    }

    open(employeeOptions: any) {
      this.userEmail = employeeOptions.CompanyEmail;
      this.userName = employeeOptions.FirstName + " " + employeeOptions.LastName;
      console.log(this.userEmail);
    }
    
    SaveTaskSheet() {
      if (
        this.EmployeeName.valid &&
        this.Supervisor.valid &&
        this.Projecttitle.valid &&
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
            "supervisorEmail": this.Supervisor.value,
            "status": this.Projecttitle.value,
            "remarks": this.Remarks.value,
            "priority": this.Priority.value,
            "startDate": this.formatDateToString(startDate), // Format start date
            "endDate": this.formatDateToString(endDate) // Format end date
          };
    
          
          this.dashService.assignTask(taskSheetData).subscribe(
            (taskSheet) =>{
              console.log("TaskSheet Data", taskSheet);
            },
            (error) =>{
              console.log("Tasksheet Data is not Fetching!!", error);
            }
          );
          console.log("TaskSheet Data", taskSheetData);

        } else {
          console.log("Invalid date format");
        }
      } else {
        console.log("Please Fill All the Fields");
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
