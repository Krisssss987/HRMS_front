import { Component, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { DashService } from '../../dash.service';


export interface PeriodicElement {
  title: string;
  Emp_title: string;
  deadline: string;
  status: string;
  remarks:string;
  assigned:string;

}

const ELEMENT_DATA: PeriodicElement[] = [];


@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css'] 
})

export class TimeSheetComponent implements OnInit{
  displayedColumns: string[] = ['Emp_title', 'title', 'remarks', 'assigned', 'priority','deadline','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog, private dashService: DashService) {}

  ngOnInit(): void {
    this.timesheet();
  }
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

  timesheet(){
    this.dashService.taskSheet().subscribe(
      (taskSheets) =>{
        console.log(taskSheets.getTaskSheet);
        this.dataSource = taskSheets.getTaskSheet;
      },
      (error) =>{
        console.log("Tasksheet Data is not Fetching!!", error);
      }
    );
  }

}



