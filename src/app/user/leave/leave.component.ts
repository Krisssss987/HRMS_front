import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {
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
  
}
