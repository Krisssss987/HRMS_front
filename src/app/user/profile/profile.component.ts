import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import reactive forms modules

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profileForm: FormGroup; // Declare a FormGroup

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required], // Add validators for required field
      surname: [''],
      mobileNumber: ['', Validators.pattern('^[0-9]*$')], // Use pattern validator for numbers
      employeeId: [''],
      collegeName: [''],
      collegeId: [''],
      addressLine1: [''],
      addressLine2: [''],
      postcode: [''],
      state: [''],
      emailId: ['', [Validators.required, Validators.email]], // Required and email validation
      education: [''],
      country: [''],
      stateRegion: [''],
    });
  }

  // ... Existing code ...

  openDialog(): void {
    // ... Existing code ...
  }
}

