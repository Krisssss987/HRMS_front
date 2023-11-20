import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-intime',
  templateUrl: './intime.component.html',
  styleUrls: ['./intime.component.css']
})
export class IntimeComponent {
  userId!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.queryParams['userId'];
    this.submit();
  }

  submit(){
    if (this.userId)
      {
      const inTimeData={
        userId: this.userId,
      };
      this.authService.intime(inTimeData).subscribe(
        () => {
          this.snackBar.open('Attendance details sent successfully!', 'Dismiss', {
            duration: 2000
          });
          this.redirectToLoginPage();
        },
        (error) => {
          this.snackBar.open(
            error.error.message || 'Failed to register inTime. Please try again.',
            'Dismiss',
            { duration: 2000 }
          );
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
