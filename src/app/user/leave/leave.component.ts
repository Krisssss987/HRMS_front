import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';
import { AuthService } from 'src/app/login/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit{

  ngOnInit(): void {
  }
  
  errorMessage!: string;
  loading: boolean = false;
  loadingMessage: string = "Sign Up";

  reasonForLeave= new FormControl('', [Validators.required,Validators.minLength(8)]);
  startDate= new FormControl('', Validators.required);
  endDate= new FormControl('', Validators.required);
  totalNumberOfLeaves= new FormControl('', [Validators.required,Validators.pattern(/^[0-9]*$/)]);
  illnessDescription=  new FormControl('', [Validators.required,Validators.minLength(8)]);
  discussedWithSupervisor= new FormControl('', Validators.required);
  typeOfLeave= new FormControl('', Validators.required);
  emergencyContact= new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
  pendingTasksHandling= new FormControl('', Validators.required);
  mobileNumber = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]);

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getMobileNumberErrorMessage() {
    if (this.mobileNumber.hasError('required')) {
      return 'Number is required';
    }
  
    if (this.mobileNumber.hasError('pattern')) {
      return 'Enter a valid 10-digit mobile number';
    }
  
    return '';
  }
  getReasonForLeaveErrorMessage() {
    if (this.reasonForLeave.hasError('required')) {
      return 'Reason for leave is required.';
    }

    return this.reasonForLeave.hasError('minlength')
      ? 'Reason for leave should be at least 5 characters long.'
      : '';
  }
  
  getTotalNumberOfLeavesErrorMessage() {
    if (this.totalNumberOfLeaves.hasError('required')) {
      return 'Total Number Of Leave is required';
    }
    if (this.totalNumberOfLeaves.hasError('pattern')) {
      return 'Total Number Of Leave must be a number';
    }
    // Add more error messages for additional validators if needed
    return '';
  }
  getDiscussedWithSupervisorErrorMessage() {
    if (this.discussedWithSupervisor.hasError('required')) {
      return 'It is required.';
    }
    return '';
  }
  getIllnessDescriptionErrorMessage() {
    if (this.illnessDescription.hasError('required')) {
      return 'Illness Description is required.';
    }

    return this.illnessDescription.hasError('minlength')
      ? 'Illness Description should be at least 8 characters long.'
      : '';
  }
  getPendingTasksHandlingErrorMessage() {
    if (this.pendingTasksHandling.hasError('required')) {
      return 'Pending Tasks Handling solution is required.';
    }
    return '';
  }
  getTypeOfLeaveErrorMessage() {
    if (this.typeOfLeave.hasError('required')) {
      return 'Type of leave is required.';
    }
    return '';
  }

  constructor(private userService:UsersService,private authService:AuthService,private snackBar:MatSnackBar) {
  }

  firstName=this.authService.getFirstName();
  lastName=this.authService.getLastName();
  companyEmail=this.authService.getCompanyEmail();
  userId=this.authService.getUserId();
  supervisor=this.authService.getSupervisor();

  submit(){
    console.log(this.supervisor)
    if (this.reasonForLeave.valid
      && this.startDate.valid && this.endDate.valid 
      && this.totalNumberOfLeaves.valid && this.illnessDescription.valid
     && this.discussedWithSupervisor.valid && this.typeOfLeave.valid
     && this.emergencyContact.valid && this.pendingTasksHandling.valid)
      {
      const internleave={
        userID:this.userId,
        firstName:this.firstName,
        lastName:this.lastName,
        companyEmail:this.companyEmail,
        reasonForLeave:this.reasonForLeave.value,
        startDate:this.startDate.value,
        endDate:this.endDate.value,
        supervisorName:this.supervisor,
        typeOfLeave:this.typeOfLeave.value,
        pendingTaskDetails:this.pendingTasksHandling.value,
        discussWithSupervisor:this.discussedWithSupervisor.value,
        totalLeaveDays:this.totalNumberOfLeaves.value,
        emergencyContact:this.emergencyContact.value,
        comments:this.reasonForLeave.value
      };
      this.userService.leaveApp(internleave).subscribe(
        () => {
          this.snackBar.open('Leave Application Sent successful!', 'Dismiss', {
            duration: 2000
          });
        },
        (error) => {
          this.snackBar.open(
            error.error.message || 'Application Sending failed. Please try again.',
            'Dismiss',
            { duration: 2000 }
          );
          this.errorMessage = error.error.message || '';
          this.loading = false;
          this.loadingMessage = "Sign Up";
        }
      );
    }
  }
}
