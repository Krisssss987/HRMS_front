import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AFilterComponent } from './a-filter/a-filter.component';
import { DashService } from '../../dash.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css'],
})
export class AttendenceComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
  };

  displayedColumns: string[] = ['Employee_ID', 'EmployeeName', 'Role', 'Date', 'InTime', 'OutTime', 'TotalHours'];

  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public dashService:DashService,
    public datepipe: DatePipe) {
      this.dataSource = new MatTableDataSource<PeriodicElement>([]);
  }

  ngOnInit() {
    // Call the function to fetch data when the component is initialized
    this.fetchAttendanceData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openTimeFilterDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '320px';
    dialogConfig.height = '28vh';
    dialogConfig.maxWidth = '90vw';
    const dialogRef = this.dialog.open(AFilterComponent, dialogConfig);
  }

  // Function to fetch attendance data from the backend
  fetchAttendanceData() {
    this.dashService.attendanceDetails().subscribe(
      (attendanceList: any) => {
        this.dataSource.data = attendanceList; // Assuming the response is an array of data
        console.log('Attendance data:', this.dataSource.data);
      },
      (error: any) => {
        console.log('Error fetching attendance data:', error);
      }
    );
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
