import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashService } from '../../dash.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css'],
})
export class EmployeeManagementComponent implements OnInit{

  ngOnInit(): void {
    this.userDetails();
  }

  CompanyEmail!: string | null;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
    
  };
  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public dashService:DashService,) {
  }

  userDetails() {
    this.CompanyEmail = sessionStorage.getItem('CompanyEmail');
    if (this.CompanyEmail) {
      this.dashService.userDetails(this.CompanyEmail).subscribe(
        (users) => {
          this.dataSource = users.userDetails;
          console.log(this.dataSource)
        },
        (error) => {
          // Handle error
        }
      );
    }
  }

 
  displayedColumns: string[] = ['Employee_ID', 'EmployeeName', 'Role', 'Email', 'PhoneNumber', 'DOB', 'Supervisor'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

    openAddUserDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = 'auto';
    dialogConfig.maxWidth = '50vh';
    const dialogRef = this.dialog.open(AddEmployeeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(userAdded => {});
  }

  
}


export interface PeriodicElement {
  Employee_ID: number;
  EmployeeName: string;
  Role: string;
  Email: string;
  PhoneNumber: string;
  DOB: string; // Add this property
  Supervisor: string; // Add this property

}


const ELEMENT_DATA: PeriodicElement[] = [
  {Employee_ID: 1, EmployeeName: 'Hydrogen', Role: '1.0079', Email: 'H',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 2, EmployeeName: 'Helium', Role: '4.0026', Email: 'He',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 3, EmployeeName: 'Lithium', Role: '6.941', Email: 'Li',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 4, EmployeeName: 'Beryllium', Role:' 9.0122', Email: 'Be',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 5, EmployeeName: 'Boron', Role:' 10.811', Email: 'B',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 6, EmployeeName: 'Carbon', Role:' 12.0107', Email: 'C',PhoneNumber: 'H',  DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 7, EmployeeName: 'Nitrogen', Role: '14.0067', Email: 'N',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 8, EmployeeName: 'Oxygen', Role: '15.9994', Email: 'O',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 9, EmployeeName: 'Fluorine', Role:' 18.9984', Email: 'F',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 10, EmployeeName: 'Neon', Role: '20.1797', Email: 'Ne',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 11, EmployeeName: 'Sodium', Role: '22.9897', Email: 'Na',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 12, EmployeeName: 'Magnesium', Role: '24.305', Email: 'Mg',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 13, EmployeeName: 'Aluminum', Role: '26.9815', Email: 'Al',PhoneNumber: 'H',  DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 14, EmployeeName: 'Silicon', Role: '28.0855', Email: 'Si',PhoneNumber: 'H',DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 15, EmployeeName: 'Phosphorus', Role: '30.9738', Email: 'P',PhoneNumber: 'H', DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 16, EmployeeName: 'Sulfur', Role: '32.065', Email: 'S',PhoneNumber: 'H',  DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 17, EmployeeName: 'Chlorine', Role: '35.453', Email: 'Cl',PhoneNumber: 'H', DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 18, EmployeeName: 'Argon', Role: '39.948', Email: 'Ar',PhoneNumber: 'H',  DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 19, EmployeeName: 'Potassium', Role: '39.0983', Email: 'K',PhoneNumber: 'H',  DOB: 'H',Supervisor: 'H'},
  {Employee_ID: 20, EmployeeName: 'Calcium', Role: '40.078', Email: 'Ca',PhoneNumber: 'H',  DOB: 'H',Supervisor: 'H'},
];



