import { Component, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { DashService } from '../../dash.service';
import { UpdatTaskComponent } from './updat-task/updat-task.component';
import {MatPaginator} from '@angular/material/paginator';


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
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private dashService: DashService) {
    this.dataSource = new MatTableDataSource<PeriodicElement>([]);
  }

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
  UpdateAssignTaskDialog(task: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '63vh';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.data = { task} ;
    const dialogRef = this.dialog.open(UpdatTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(deviceAdded => {
      this.timesheet();
    });
  }

  timesheet(){
    this.dashService.taskSheet().subscribe(
      (taskSheets) =>{
        this.dataSource.data = taskSheets.getTaskSheet;
        this.dataSource.paginator = this.paginator;
      },
      (error) =>{
        console.log("Tasksheet Data is not Fetching!!", error);
      }
    );
  }
  getPriorityColor(priority: string): string {
    if (priority === 'High') {
      return 'red'; // Set the color for 'High' priority
    } else if (priority === 'Normal') {
      return 'orange'; // Set the color for 'Medium' priority
    } else if (priority === 'Low') {
      return 'green'; // Set the color for 'Low' priority
    } else {
      return 'black'; // Default color
    }
  }

}



