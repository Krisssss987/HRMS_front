import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashService } from '../../dash.service';
import { DatePipe } from '@angular/common';
import { EditEmpComponent } from './edit-emp/edit-emp.component';


@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css'],
})
export class EmployeeManagementComponent implements OnInit{

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  signupForm: FormGroup | undefined;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  contactNo = new FormControl('', [Validators.required,Validators.pattern(/^[0-9]{10}$/)]);
  DOB = new FormControl('', [Validators.required]);
  Total = new FormControl('', [Validators.required]);
  roles = new FormControl('', [Validators.required]);
  supervisor = new FormControl('', [Validators.required]);
  employeeEmail = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',);

  dataSource: MatTableDataSource<PeriodicElement>;

  ngOnInit(): void {
    this.userDetails();
  }

  CompanyEmail!: string | null;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
    
  };
  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public dashService:DashService,
    public datepipe: DatePipe) {
      this.dataSource = new MatTableDataSource<PeriodicElement>([]);
  }

  userDetails() {
    this.CompanyEmail = sessionStorage.getItem('CompanyEmail');
    if (this.CompanyEmail) {
      this.dashService.userDetails(this.CompanyEmail).subscribe(
        (users) => {
          this.dataSource.data = users.userDetails.map((user: PeriodicElement) => {
            user.formattedDate = this.datepipe.transform(user.DOB, 'dd-MM-yyyy');
            return user;
          });
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          // Handle error
        }
      );
    }
  }

 
  displayedColumns: string[] = ['Employee_ID', 'EmployeeName', 'Role', 'Email', 'PhoneNumber', 'DOB', 'Supervisor'];
  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onSaveClick(): void {
    if(this.firstName.valid && this.lastName.valid && this.DOB.valid
      && this.contactNo.valid && this.Total.valid && this.roles.valid 
      && this.supervisor.valid && this.employeeEmail.valid){
      const addUser = {
        companyEmail: this.employeeEmail.value,
        contact: this.contactNo.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        designation: this.roles.value,
        password: this.employeeEmail.value,
        supervisor: this.supervisor.value,
        totalWorkingDays: this.Total.value,
        dateOfBirth: this.DOB.value
      }
      this.dashService.addUser(addUser).subscribe(
        () =>{
          this.snackBar.open('User Added Successful!', 'Dismiss', {
            duration: 2000
          });
          this.userDetails();
        },
      (error) => {
        this.snackBar.open(
            error.error.message || 'Failed to add User. Please try again.',
            'Dismiss',
            { duration: 2000 }
          );
      });
      
    } else {
      this.snackBar.open('Please fill all the fields', 'Dismiss', {
        duration: 2000
      });
    }
  }

 // openEditEmployee(employee: any): void{
   // console.log(employee);
  //}
  openEditEmployee(user: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '63vh';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.data = { user };
    const dialogRef = this.dialog.open(EditEmpComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(deviceAdded => {
      this.userDetails();
    });
  }
  getRoleTextStyle(role: string): any {
    let textStyle = {};
  
    if (role === 'Manager') {
      textStyle = {
        color: 'blue', // Set the color for Manager role
      };
    } else if (role === 'Supervisor') {
      textStyle = {
        color: 'green', // Set the color for Supervisor role
      };
      
    } // Add more conditions for other roles if needed
    else if (role === 'Intern') {
      textStyle = {
        color: 'red', // Set the color for Employee role
      };
      
    } else {  // Default color  
      textStyle = {
        color: 'black',
      };
    }
  
    return textStyle;
  }
  
}

export interface PeriodicElement {
  Employee_ID: number;
  EmployeeName: string;
  Role: string;
  Email: string;
  PhoneNumber: string;
  DOB: string; // Add this property
  Supervisor: string; // Add this property
  formattedDate: string | null; // Add this property
}

