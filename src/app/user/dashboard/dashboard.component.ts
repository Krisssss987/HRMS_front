import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
import {MatTableModule} from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Subscription, interval, take } from 'rxjs';

export interface PeriodicElement {
  priority: string;
  Task_name: string;
  Deadline: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
  {Task_name: 'EMS', priority: 'High', Deadline: '10-8-23'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit,OnInit {

  qrInTime: string;
  qrOutTime: string;
  userId=sessionStorage.getItem('UserId')
  status: number = 0;
  intervalSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.getInterndata();
    this.startInterval();
  }

  constructor(public userService:UsersService){
    this.qrInTime = 'http://localhost:4200/login/intime?userId='+this.userId;
    this.qrOutTime = 'http://localhost:4200/login/outTime?userId='+this.userId;
  }

  ngOnDestroy() {
    this.stopInterval();
  }

  startInterval() {
    this.intervalSubscription = interval(5000)
      .pipe(take(Infinity))
      .subscribe(() => {
        this.getInterndata();
      });
  }

  stopInterval() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  getInterndata(){
    if(this.userId){
      this.userService.getInternInfo(this.userId).subscribe(
        (status)=>{
          this.status=status.internInfo.attendance;
        }
      )
    }
  }

  disableSelect = new FormControl(false);
  displayedColumns: string[] = ['Task_name', 'priority', 'Deadline','Progrees' ,'actions'];
  dataSource = ELEMENT_DATA;

  ngAfterViewInit() {
    Highcharts.chart('chartContainer', this.chartOptions);
    Highcharts.chart('pieChartContainer2', this.pieChartOptions2);
  }

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    credits:{
      enabled:false
    },
    exporting:{
      enabled:false
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Mon','Tue','Wed','Thu','Fri','sat']
    },
    yAxis: {
      title: {
        text: '',
      }
    },
    series: [{
      type: 'column',
      name: 'Total working hours this week',
      data: [4,6,8,2,1,4],
      color: '#E57C23' // Set the color to #EE8437
    },
   ]
  };
 
  pieChartOptions2: Highcharts.Options = {
    chart: {
      type: 'pie'
    },    
    credits:{
      enabled:false
    },
    
    exporting:{
      enabled:false
    },
    title: {
      text: ''
    },
    series: [{
      type: 'pie',
      name: 'Days',
      data: [
        ['Present', 4],
        ['Absent', 3],
      ]
    }]
  };
}
