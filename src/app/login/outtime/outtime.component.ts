import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-outtime',
  templateUrl: './outtime.component.html',
  styleUrls: ['./outtime.component.css']
})
export class OuttimeComponent {
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
      const outTimeData={
        userId: this.userId,
      };
      this.authService.outtime(this.userId,outTimeData).subscribe(
        () => {
          this.snackBar.open('Out details sent successfully!', 'Dismiss', {
            duration: 2000
          });
          this.redirectToLoginPage();
        },
        (error) => {
          this.snackBar.open(
            error.error.message || 'Failed to register OutTime. Please try again.',
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
