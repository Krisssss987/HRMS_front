import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public myAngularxQrCode: string = "";
   
  constructor () {
    this.myAngularxQrCode = 'tutsmake.com';
  }
}
