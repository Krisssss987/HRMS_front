import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  errorMessage = '';
  loading: boolean = false;
  loadingMessage: string = "Sign In";

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar:MatSnackBar
  ) {}

 
  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    return this.password.hasError('minlength')
      ? 'Password should be at least 8 characters long'
      : '';
  }
  submit() {
    if (this.email.valid && this.password.valid) {
      const loginData = {
        Username: this.email.value,
        Password: this.password.value
      };
      this.authService.login(loginData).subscribe(
        (response) => {
          const token = response.token;
          this.authService.setToken(token);
          const checkDesignation = () => {
            const Designation = this.authService.getDesignation();
            if (Designation) {
              this.redirectUser(Designation);
              this.snackBar.open('Login successful!', 'Dismiss', {
                duration: 2000
              });
            } else {
              setTimeout(checkDesignation, 100);
            }
          };
          checkDesignation();
        },
        (error) => {
          this.snackBar.open(
            error.error.message || 'Login failed. Please try again.',
            'Dismiss',
            { duration: 2000 }
          );
          this.errorMessage = error.error.message || '';
          this.loading = false;
          this.loadingMessage = "Sign In";
        }
      );
    }
    this.router.navigate(['']);
  }

  redirectUser(Designation: string) {
    if (Designation === 'Intern' || Designation === 'Employee') {
      this.router.navigate(['dashboard']);
    } else if (Designation === 'Super Employee') {
      this.router.navigate(['/sa']);
    }
  }
}