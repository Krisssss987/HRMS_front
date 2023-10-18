import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AssignTaskComponent } from './assign-task/assign-task.component';

export interface PeriodicElement {
  title: string;
  Emp_title: string;
  deadline: string;
  status: string;
  remarks:string;
  assigned:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {Emp_title: 'Vishal chouhan', title: 'HRMS', deadline: '14-10-23',assigned:'16-10-23', status: 'pending',remarks:'You have to update the chatbox'},

];


@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css'] 
})

export class TimeSheetComponent {
  displayedColumns: string[] = ['Emp_title', 'title', 'remarks','status', 'assigned','deadline','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openAssignTaskDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '63vh';
    dialogConfig.maxWidth = '90vw';
    const dialogRef = this.dialog.open(AssignTaskComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(deviceAdded => {});
  }

}



