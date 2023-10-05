import { Component } from '@angular/core';
import { FormControl, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})

export class ResetComponent {
  hide = true;

  token!: string;
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmpassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  errorMessage = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

 ngOnInit() {
  this.token = this.route.snapshot.queryParams['token']; // Access token from query parameters
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }

    if (this.password.hasError('minlength')) {
      return 'Password must be at least 8 characters long'; // Adjust the message accordingly
    }

    return this.password.hasError('pattern')
      ? 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@#$%^&+=)'
      : '';
  }

  getConfirmPasswordErrorMessage() {
    if (this.confirmpassword.hasError('required')) {
      return 'Confim Password is required';
    }

    if (this.confirmpassword.hasError('minlength')) {
      return 'Password should be at least 8 characters long';
    }

    if (this.password.value !== this.confirmpassword.value) {
     return 'Passwords do not match';
  }
  return '';
}

submit(){
  if (this.token) {
    const resetData = { 
      token: this.token ,
      password: this.password.value
    };
    this.authService.reset(resetData) .subscribe(
        () => {
          console.log("Password Update Successfully!")
          this.redirectToLoginPage();
        },
        error => {
          console.log("Failed to update password")
          this.redirectToLoginPage();
        }
      );
  } else {
    console.log("Token not found")
    this.redirectToLoginPage();
  }
}

redirectToLoginPage() {
  setTimeout(() => {
    this.router.navigate(['/login/login']);
  }, 2000); // 4-second delay (4000 milliseconds)
}



}
