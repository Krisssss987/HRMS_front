import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

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
    title: {
      text: ''
    },
    xAxis: {
      categories: ['']
    },
    yAxis: {
      title: {
        text: 'No. of Employees'
      }
    },
    series: [{
      type: 'column',
      name: 'Total Employee',
      data: [5]
    },
    {
      type: 'column',
      name: 'Present Employee',
      data: [10]
    },
    {
      type: 'column',
      name: 'Absent Employee',
      data: [7]
    }]
  };

  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },    
    credits:{
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
  
  
}
