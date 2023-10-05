import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';


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

  displayedColumns = [ 'project_title','status','submitted_date','timesheet_date','remark'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  project_title: string;
  status: string;
  submitted_date:Date;
  timesheet_date:Date;
  remark:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 {project_title:'EMS',status:'Submitted',submitted_date:new Date('2023-10-05'),timesheet_date:new Date('2023-10-05'),remark:'Changes'},
 {project_title:'HRMS',status:'Not Submitted',submitted_date:new Date('2023-10-05'),timesheet_date:new Date('2023-10-05'),remark:'Approved'},
 {project_title:'TMS',status:'Submitted',submitted_date:new Date('2023-10-05'),timesheet_date:new Date('2023-10-05'),remark:'Changes'},
 {project_title:'PP DETECTION',status:'Not Submitted',submitted_date:new Date('2023-10-05'),timesheet_date:new Date('2023-10-05'),remark:'Approved'},
 {project_title:'WMS',status:'Submitted',submitted_date:new Date('2023-10-05'),timesheet_date:new Date('2023-10-05'),remark:'Changes'},
];
