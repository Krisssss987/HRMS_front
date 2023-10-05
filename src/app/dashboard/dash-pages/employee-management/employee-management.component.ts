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
export class EmployeeManagementComponent {

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
    
  };
  
 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbo', 'extraColumn1', 'extraColumn2'];

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
  name: string;
  position: number;
  weight: number;
  symbol: string;
  symbo: string;
  extraColumn1: string; // Add this property
  extraColumn2: string; // Add this property

}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',symbo: 'H',  extraColumn1: 'H',extraColumn2: 'H'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',symbo: 'H',  extraColumn1: 'H',extraColumn2: 'H'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',symbo: 'H',extraColumn1: 'H',extraColumn2: 'H'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P',symbo: 'H', extraColumn1: 'H',extraColumn2: 'H'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S',symbo: 'H',  extraColumn1: 'H',extraColumn2: 'H'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl',symbo: 'H', extraColumn1: 'H',extraColumn2: 'H'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar',symbo: 'H',  extraColumn1: 'H',extraColumn2: 'H'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K',symbo: 'H',  extraColumn1: 'H',extraColumn2: 'H'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca',symbo: 'H',  extraColumn1: 'H',extraColumn2: 'H'},
];



