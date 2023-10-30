import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashService } from '../../dash.service';
import { Router } from '@angular/router';
HC_exporting(Highcharts);

interface Food {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;
  NoOfDays: number;
  from: string;
  To: string;
  type:string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  dataSource: any;
  division: any[] = [];

  ngOnInit(): void {
    this.TodayLeave();
    this.Division();
  }

  CompanyEmail!: string | null;

  constructor(
    public snackBar: MatSnackBar,
    public dashService:DashService,
    public router:Router
  ){}

  TodayLeave() {
    this.dashService.leaveToday().subscribe(
      (users) => {
        this.dataSource = users.getLeaveInfoByDate;
        console.log(this.dataSource)
      },
      (error) => {
        // Handle error
      }
    );
  }

  Division() {
    this.dashService.Divisions().subscribe(
    (division) => {
      this.division = division.designations;
      console.log(this.division);
    },
    (error) => {
      // Handle error
    }
    );
  }

  ngAfterViewInit() {
    Highcharts.chart('chartContainer', this.chartOptions);
    Highcharts.chart('pieChartContainer', this.pieChartOptions);
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
      color: '#2aa0a0' // Set the color to #EE8437
    },
   ]
  };

  pieChartOptions: Highcharts.Options = {
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
      name: 'Data',
      data: this.division.map(item => [item.label, item.data])
    }]
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
      name: 'Employee',
      data: [
        ['Present', 70],
        ['Absent', 30],
      ]
    }]
  };


  foods: Food[] = [
    {value: '1day', viewValue: '1day'},
    {value: '1 week', viewValue: '1 week'},
    {value: '1 month', viewValue: '1 month'},
  ];
  
  displayedColumns = [
    'name',   'NoOfDays',  'from',  'To','type'
  ];
  
}
