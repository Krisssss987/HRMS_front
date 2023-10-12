import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],

})
export class LeaveComponent {
  displayedColumns: string[] = ['Date', 'EmployeeName', 'Leave', 'Days', 'Status', 'Actions', 'View'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  Date: number;
  EmployeeName: string;
  Leave: string;
  Days: string;
  Status: string;
  Actions: string;
  Supervisor: string;
  ApprovedReject: string;

}
  
const ELEMENT_DATA: PeriodicElement[] = [
  { Date: 1, EmployeeName: 'Hydrogen', Leave: '1.0079', Days: 'H', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 2, EmployeeName: 'Helium', Leave: '4.0026', Days: 'He', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
  { Date: 3, EmployeeName: 'Lithium', Leave: '6.941', Days: 'Li', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 4, EmployeeName: 'Beryllium', Leave: '9.0122', Days: 'Be', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
  { Date: 5, EmployeeName: 'Boron', Leave: '10.811', Days: 'B', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 6, EmployeeName: 'Carbon', Leave: '12.0107', Days: 'C', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
  { Date: 7, EmployeeName: 'Nitrogen', Leave: '14.0067', Days: 'N', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 8, EmployeeName: 'Oxygen', Leave: '15.9994', Days: 'O', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
  { Date: 9, EmployeeName: 'Fluorine', Leave: '18.9984', Days: 'F', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 10, EmployeeName: 'Neon', Leave: '20.1797', Days: 'Ne', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
  { Date: 11, EmployeeName: 'Sodium', Leave: '22.9897', Days: 'Na', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 12, EmployeeName: 'Magnesium', Leave: '24.305', Days: 'Mg', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
  { Date: 13, EmployeeName: 'Aluminum', Leave: '26.9815', Days: 'Al', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 14, EmployeeName: 'Silicon', Leave: '28.0855', Days: 'Si', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
  { Date: 15, EmployeeName: 'Phosphorus', Leave: '30.9738', Days: 'P', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 16, EmployeeName: 'Sulfur', Leave: '32.065', Days: 'S', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
  { Date: 17, EmployeeName: 'Chlorine', Leave: '35.453', Days: 'Cl', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 18, EmployeeName: 'Argon', Leave: '39.948', Days: 'Ar', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
  { Date: 19, EmployeeName: 'Potassium', Leave: '39.0983', Days: 'K', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Approved' },
  { Date: 20, EmployeeName: 'Calcium', Leave: '40.078', Days: 'Ca', Status: 'H', Actions: 'H', Supervisor: 'H', ApprovedReject: 'Rejected' },
];
