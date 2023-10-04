import { Component } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage!: string;
  loading: boolean = false;
  loadingMessage: string = "Sign Up";

  hide1 = true;
  hide2 = true; 
  email = new FormControl('', [Validators.required, Validators.email,]);
  mobileNumber = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]);
  DOB = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).*$/)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).*$/)]);
  designation = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    return this.password.hasError('minlength')
      ? 'Password should be at least 8 characters long'
      : '';
  }
  getConfirmPasswordErrorMessage() {
    if (this.confirmPassword.hasError('required')) {
      return 'Password is required';
    }
    if (this.confirmPassword.hasError('minlength')) {
      return 'Password should be at least 8 characters long';
    }
    if (this.password.value !== this.confirmPassword.value) {
      return 'Passwords do not match';
    }
    if (this.password.hasError('pattern')) {
      return 'Must contain at least one lowercase,uppercase letter,one digit, and one special character @#$%^&+=';
    }
    return '';
  }
  passwordMatchValidator(control: FormControl) {
    if (this.password.value !== control.value) {
      return { passwordMismatch: true };
    }
    return null;
  }
  redirectToRegVerify(companyEmail: string | null) {
    if (companyEmail) {
      const queryParams = {
      };
      const navigationExtras: NavigationExtras = {
        queryParams: queryParams
      };
      this.router.navigate(['/login/login'], navigationExtras);
    } else {
      this.snackBar.open('Personal email is null',
        'Dismiss',
        { duration: 2000 }
      );
  }
}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getMobileNumberErrorMessage() {
    if (this.mobileNumber.hasError('required')) {
      return 'Mobile number is required';
    }
  
    if (this.mobileNumber.hasError('pattern')) {
      return 'Enter a valid 10-digit mobile number';
    }
  
    return '';
  }
  getDOBErrorMessage() {
    if (this.DOB.hasError('required')) {
      return 'DOB is required';
    }
  
    return '';
  }
  getFirstNameErrorMessage() {
    if (this.firstName.hasError('required')) {
      return 'First Name is required';
    }
  
    return '';
  }
  getLastNameErrorMessage() {
    if (this.lastName.hasError('required')) {
      return 'Last Name is required';
    }
  
    return '';
  }
  getDesignationErrorMessage() {
    if (this.designation.hasError('required')) {
      return 'Designation is required';
    }
    return '';
  }
  getDobErrorMessage() {
    if (this.DOB.hasError('required')) {
      return 'Date of Birth is required';
    }
    return '';
  }

  constructor(
    private authService:AuthService,   
    private router: Router,
    private snackBar: MatSnackBar,
  ){}

  submit(){
    if (this.email.valid && this.mobileNumber.valid
       && this.DOB.valid && this.firstName.valid 
       && this.lastName.valid && this.designation.valid
      && this.password.valid && this.confirmPassword.valid)
      {
      const registerData={
        companyEmail: this.email.value,
        contact: this.mobileNumber.value,
        dateOfBirth: this.DOB.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        designation: this.designation.value,
        password: this.password.value,
      };
      this.authService.register(registerData).subscribe(
        () => {
          const companyEmail = registerData.companyEmail;
          this.redirectToRegVerify(companyEmail);
          this.snackBar.open('Registration successful!', 'Dismiss', {
            duration: 2000
          });
        },
        (error) => {
          this.snackBar.open(
            error.error.message || 'Registration failed. Please try again.',
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
