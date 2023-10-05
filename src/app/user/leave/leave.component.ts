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

  reasonForLeave= new FormControl('', Validators.required);
  startDate= new FormControl('', Validators.required);
  endDate= new FormControl('', Validators.required);
  totalNumberOfLeaves= new FormControl('', Validators.required);
  illnessDescription=  new FormControl('', Validators.required);
  discussedWithSupervisor= new FormControl('', Validators.required);
  typeOfLeave= new FormControl('', Validators.required);
  emergencyContact= new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
  pendingTasksHandling= new FormControl('', Validators.required);

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
  mobileNumber = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]);
  getMobileNumberErrorMessage() {
    if (this.mobileNumber.hasError('required')) {
      return 'Number is required';
    }
  
    if (this.mobileNumber.hasError('pattern')) {
      return 'Enter a valid 10-digit mobile number';
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
