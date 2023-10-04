import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashService } from 'src/app/dashboard/dash.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

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

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    public dashService:DashService,
    public snackBar: MatSnackBar,
  ){
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
    
  };

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
        this.dialogRef.close();
        },
      (error) => {
        this.snackBar.open(
            error.error.message || 'Failed to add User. Please try again.',
            'Dismiss',
            { duration: 2000 }
          );
        this.dialogRef.close();
      });
    }
  }
}
