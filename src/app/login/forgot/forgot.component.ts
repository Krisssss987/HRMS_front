import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router, NavigationExtras} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  constructor(
    private authService:AuthService,
    private router: Router,
    
  ){}

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';
  loading: boolean = false;
  loadingMessage: string = "Submit";

  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit(){
    if (this.email.valid) {
      this.loading = true;
      this.loadingMessage = "Submitting...";
      const forgotData = {
        companyEmail: this.email.value,
      };
      this.authService.forgot(forgotData).subscribe(
        () => {
          const companyEmail = forgotData.companyEmail;
          console.log("Link Sent Successfully");
          this.redirectToLoginPage();
        },
        (error) => {
          console.log("Failed to send link");
          this.redirectToLoginPage();
        }
      );
    }
  }

  redirectToLoginPage() {
    setTimeout(() => {
      this.router.navigate(['/login/login']);
    }, 2000); // 4-second delay (4000 milliseconds)
  }
}

