import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { DashService } from 'src/app/dashboard/dash.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

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
  user: any;


  onNoClick(): void {
    this.dialogRef.close();
  }
  
  constructor(
    public dialogRef: MatDialogRef<EditEmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dashService:DashService,
    public snackBar: MatSnackBar,
  ){
    this.user = data.user;
    console.log(this.user);
  }
  ngOnInit(): void {
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
  EditEMP(id :string){
    // 

  }
  // EditEmployee(): void {
  //   if (this.firstName.valid && this.lastName.valid && this.DOB.valid && this.contactNo.valid && this.Total.valid && this.roles.valid && this.supervisor.valid && this.employeeEmail.valid) {
  //     const updatedEmployee = {
  //       // Include any relevant properties that you want to update.
  //       // Assuming that user.UserId is available and unique for each employee.
  //       UserId: this.user.UserId,
  //       companyEmail: this.employeeEmail.value,
  //       contact: this.contactNo.value,
  //       firstName: this.firstName.value,
  //       lastName: this.lastName.value,
  //       designation: this.roles.value,
  //       supervisor: this.supervisor.value,
  //       totalWorkingDays: this.Total.value,
  //       dateOfBirth: this.DOB.value,
  //     };
  
  //     this.dashService.addUser(updatedEmployee).subscribe(
  //       () => {
  //         this.snackBar.open('Employee Updated Successfully!', 'Dismiss', {
  //           duration: 2000
  //         });
  //         this.dialogRef.close(updatedEmployee); // Close the dialog and pass the updated data back to the calling component
  //       },
  //       (error) => {
  //         this.snackBar.open(
  //           error.error.message || 'Failed to update Employee. Please try again.',
  //           'Dismiss',
  //           { duration: 2000 }
  //         );
  //         this.dialogRef.close(); // Close the dialog without any data changes
  //       }
  //     );
  //   }
  // }
  

  // updateUser(UserId: number): void {
  //   if (
  //     this.firstName.valid &&
  //     this.lastName.valid &&
  //     this.DOB.valid &&
  //     this.contactNo.valid &&
  //     this.Total.valid &&
  //     this.roles.valid &&
  //     this.supervisor.valid &&
  //     this.employeeEmail.valid
  //   ) {
  //     const updatedUser = {
  //       UserId, // Add the UserId of the user you want to update
  //       companyEmail: this.employeeEmail.value,
  //       contact: this.contactNo.value,
  //       firstName: this.firstName.value,
  //       lastName: this.lastName.value,
  //       designation: this.roles.value,
  //       supervisor: this.supervisor.value,
  //       totalWorkingDays: this.Total.value,
  //       dateOfBirth: this.DOB.value,
  //     };
  
  //    // this.dashService.updateUser(updatedUser).subscribe(
  //       // () => {
  //       //   this.snackBar.open('User Updated Successfully!', 'Dismiss', {
  //       //     duration: 2000
  //       //   });
  //       //   this.dialogRef.close();
  //       //   this.userDetails(); // Refresh the user details after update
  //       // },
  //       // (error) => {
  //       //   this.snackBar.open(
  //       //     error.error.message || 'Failed to update User. Please try again.',
  //       //     'Dismiss',
  //       //     { duration: 2000 }
  //       //   );
  //       //   this.dialogRef.close();
  //       // }
  //     //);
  //   }
  // }
  // EditEmployee(): void {
  //   if (
  //     this.firstName.valid &&
  //     this.lastName.valid &&
  //     this.DOB.valid &&
  //     this.contactNo.valid &&
  //     this.Total.valid &&
  //     this.roles.valid &&
  //     this.supervisor.valid &&
  //     this.employeeEmail.valid
  //   ) {
  //     const updatedEmployee = {
  //       UserId: this.user.UserId,
  //       companyEmail: this.employeeEmail.value,
  //       contact: this.contactNo.value,
  //       firstName: this.firstName.value,
  //       lastName: this.lastName.value,
  //       designation: this.roles.value,
  //       supervisor: this.supervisor.value,
  //       totalWorkingDays: this.Total.value,
  //       dateOfBirth: this.DOB.value,
  //     };
  
  //     this.dashService.updateEmployee(updatedEmployee).subscribe(
  //       () => {
  //         this.snackBar.open('Employee Updated Successfully!', 'Dismiss', {
  //           duration: 2000
  //         });
  //         this.dialogRef.close(updatedEmployee); // Close the dialog and pass the updated data back to the calling component
  //       },
  //       (error) => {
  //         this.snackBar.open(
  //           error.error.message || 'Failed to update Employee. Please try again.',
  //           'Dismiss',
  //           { duration: 2000 }
  //         );
  //         this.dialogRef.close(); // Close the dialog without any data changes
  //       }
  //     );
  //   }
  // }
  EditEmployee(): void {
    if (
      this.firstName.valid &&
      this.lastName.valid &&
      this.DOB.valid &&
      this.contactNo.valid &&
      this.Total.valid &&
      this.roles.valid &&
      this.supervisor.valid &&
      this.employeeEmail.valid
    ) {
      const updatedEmployee = {
        UserId: this.user.UserId,
        companyEmail: this.employeeEmail.value,
        contact: this.contactNo.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        designation: this.roles.value,
        supervisor: this.supervisor.value,
        totalWorkingDays: this.Total.value,
        dateOfBirth: this.DOB.value,
      };
        if(this.UserId ){
          
        }
      this.dashService.updateEmployee(updatedEmployee).subscribe(
        () => {
          this.snackBar.open('Employee Updated Successfully!', 'Dismiss', {
            duration: 2000
          });
          this.dialogRef.close(updatedEmployee); // Close the dialog and pass the updated data back to the calling component
        },
        (error) => {
          this.snackBar.open(
            error.error.message || 'Failed to update Employee. Please try again.',
            'Dismiss',
            { duration: 2000 }
          );
          this.dialogRef.close(); // Close the dialog without any data changes
        }
      );
    }
  }
  

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
