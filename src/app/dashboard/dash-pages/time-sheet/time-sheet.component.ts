import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';




@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css'] 
})

export class TimeSheetComponent {

  title = 'timesheet';

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;  
  };
  displayedColumns: string[] = ['ProjectTitle', 'Status', 'SubmittedDate', 'TimesheetDate', 'Remarks'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  ProjectTitle: string;
  Status: string;
  SubmittedDate: string;
  TimesheetDate: string;
  Remarks: string;
 
}
const ELEMENT_DATA: PeriodicElement[] = [
  { ProjectTitle: '1', Status: 'Hydrogen', SubmittedDate: '1.0079', TimesheetDate: 'H', Remarks: 'H'},
  { ProjectTitle: '2', Status: 'Helium', SubmittedDate: '4.0026', TimesheetDate: 'He', Remarks: 'H' },
  { ProjectTitle: '3', Status: 'Lithium', SubmittedDate: '6.941', TimesheetDate: 'Li', Remarks: 'H'},
  { ProjectTitle: '4', Status: 'Beryllium', SubmittedDate: '9.0122', TimesheetDate: 'Be', Remarks: 'H' },
  { ProjectTitle: '5', Status: 'Boron', SubmittedDate: '10.811', TimesheetDate: 'B', Remarks: 'H'},
  { ProjectTitle: '6', Status: 'Carbon', SubmittedDate: '12.0107', TimesheetDate: 'C', Remarks: 'H' },
  { ProjectTitle: '7', Status: 'Nitrogen', SubmittedDate: '14.0067', TimesheetDate: 'N', Remarks: 'H' },
  { ProjectTitle: '8', Status: 'Oxygen', SubmittedDate: '15.9994', TimesheetDate: 'O', Remarks: 'H'},
  { ProjectTitle: '9', Status: 'Fluorine', SubmittedDate: '18.9984', TimesheetDate: 'F', Remarks: 'H' },
  { ProjectTitle: '10', Status: 'Neon', SubmittedDate: '20.1797', TimesheetDate: 'Ne', Remarks: 'H' },
  { ProjectTitle: '11', Status: 'Sodium', SubmittedDate: '22.9897', TimesheetDate: 'Na', Remarks: 'H' },
  { ProjectTitle: '12', Status: 'Magnesium', SubmittedDate: '24.305', TimesheetDate: 'Mg', Remarks: 'H' },
  { ProjectTitle: '13', Status: 'Aluminum', SubmittedDate: '26.9815', TimesheetDate: 'Al', Remarks: 'H' },
  { ProjectTitle: '14', Status: 'Silicon', SubmittedDate: '28.0855', TimesheetDate: 'Si', Remarks: 'H' },
  { ProjectTitle: '15', Status: 'Phosphorus', SubmittedDate: '30.9738', TimesheetDate: 'P', Remarks: 'H'},
  { ProjectTitle: '16', Status: 'Sulfur', SubmittedDate: '32.065', TimesheetDate: 'S', Remarks: 'H' },
  { ProjectTitle: '17', Status: 'Chlorine', SubmittedDate: '35.453', TimesheetDate: 'Cl', Remarks: 'H' },
  { ProjectTitle: '18', Status: 'Argon', SubmittedDate: '39.948', TimesheetDate: 'Ar', Remarks: 'H' },
  { ProjectTitle: '19', Status: 'Potassium', SubmittedDate: '39.0983', TimesheetDate: 'K', Remarks: 'H' },
  { ProjectTitle: '20', Status: 'Calcium', SubmittedDate: '40.078', TimesheetDate: 'Ca', Remarks: 'H'},
];

