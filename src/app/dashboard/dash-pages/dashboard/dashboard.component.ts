import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
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

const ELEMENT_DATA: PeriodicElement[] = [
  {NoOfDays: 2, name: 'Vishal Chouhan', from: '11-10-23', To: '13-10-23',type:'medical'},
  {NoOfDays: 2, name: 'krishna lokhande', from: '11-10-23', To: '13-10-23',type:'medical'},
  {NoOfDays: 2, name: 'gaurav jadhav', from: '11-10-23', To: '13-10-23',type:'medical'},
  {NoOfDays: 2, name: 'kaushal pohekar', from: '11-10-23', To: '13-10-23',type:'medical'},
  {NoOfDays: 2, name: 'Vishal Chouhan', from: '11-10-23', To: '13-10-23',type:'medical'},
  {NoOfDays: 2, name: 'krishna lokhande', from: '11-10-23', To: '13-10-23',type:'medical'},
  {NoOfDays: 2, name: 'gaurav jadhav', from: '11-10-23', To: '13-10-23',type:'medical'},
  {NoOfDays: 2, name: 'kaushal pohekar', from: '11-10-23', To: '13-10-23',type:'medical'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    Highcharts.chart('chartContainer', this.chartOptions);
    Highcharts.chart('pieChartContainer', this.pieChartOptions);
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
      data: [
        ['FrontEnd Developer', 10],
        ['BackEnd Developer', 20],
        ['Designer', 30],
        ['Intern', 30]
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
  dataSource = ELEMENT_DATA;
  
}
