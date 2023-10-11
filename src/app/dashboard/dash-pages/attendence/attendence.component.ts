import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator';



@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css'],
})
export class AttendenceComponent {

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
    
  };
  
// constructor and  dashservis 
  displayedColumns: string[] = ['Employee_ID', 'EmployeeName', 'Role', 'Date', 'InTime', 'OutTime', 'TotalHours'];

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

  
}
export interface PeriodicElement {
  Employee_ID: number;
  EmployeeName: string;
  Role: string;
  Date: string;
  InTime: string;
  OutTime: string; // Add this property
  TotalHours: string; // Add this property

}


const ELEMENT_DATA: PeriodicElement[] = [
  {Employee_ID: 1, EmployeeName: 'Hydrogen', Role: '1.0079', Date: 'H',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 2, EmployeeName: 'Helium', Role: '4.0026', Date: 'He',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 3, EmployeeName: 'Lithium', Role: '6.941', Date: 'Li',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 4, EmployeeName: 'Beryllium', Role:' 9.0122', Date: 'Be',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 5, EmployeeName: 'Boron', Role:' 10.811', Date: 'B',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 6, EmployeeName: 'Carbon', Role:' 12.0107', Date: 'C',InTime: 'H',  OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 7, EmployeeName: 'Nitrogen', Role: '14.0067', Date: 'N',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 8, EmployeeName: 'Oxygen', Role: '15.9994', Date: 'O',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 9, EmployeeName: 'Fluorine', Role:' 18.9984', Date: 'F',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 10, EmployeeName: 'Neon', Role: '20.1797', Date: 'Ne',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 11, EmployeeName: 'Sodium', Role: '22.9897', Date: 'Na',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 12, EmployeeName: 'Magnesium', Role: '24.305', Date: 'Mg',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 13, EmployeeName: 'Aluminum', Role: '26.9815', Date: 'Al',InTime: 'H',  OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 14, EmployeeName: 'Silicon', Role: '28.0855', Date: 'Si',InTime: 'H',OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 15, EmployeeName: 'Phosphorus', Role: '30.9738', Date: 'P',InTime: 'H', OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 16, EmployeeName: 'Sulfur', Role: '32.065', Date: 'S',InTime: 'H',  OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 17, EmployeeName: 'Chlorine', Role: '35.453', Date: 'Cl',InTime: 'H', OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 18, EmployeeName: 'Argon', Role: '39.948', Date: 'Ar',InTime: 'H',  OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 19, EmployeeName: 'Potassium', Role: '39.0983', Date: 'K',InTime: 'H',  OutTime: 'H',TotalHours: 'H'},
  {Employee_ID: 20, EmployeeName: 'Calcium', Role: '40.078', Date: 'Ca',InTime: 'H',  OutTime: 'H',TotalHours: 'H'},
];



