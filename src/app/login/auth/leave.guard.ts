// leave-id.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DashService } from 'src/app/dashboard/dash.service';

@Injectable({
  providedIn: 'root',
})
export class LeaveIdGuard implements CanActivate {
  constructor(private dashService: DashService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const leaveId = this.dashService.getLeaveId();

    if (leaveId) {
      return true;
    } else {
      return this.router.createUrlTree(['/sa/leave']);
    }
  }
}
