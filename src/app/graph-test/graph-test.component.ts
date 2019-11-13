import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'app-graph-test',
  templateUrl: './graph-test.component.html',
  styleUrls: ['./graph-test.component.css']
})
export class GraphTestComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      renderTo: 'container',
      type: 'column',
      margin: 75,
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: 'Licenses'
    },
    yAxis: {
      title: {
        text: "Licenses"
      }
    },

    legend: {
      enabled: false
    },

    credits: {
      enabled: false
    },
    xAxis: {
      categories: ["Consumed", "Remaining"],
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      data: [29, 71]
    }]
  };
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['HP', 'CapGemini', 'Genpact', 'TechMaindra', 'Epam', 'Robicon', 'ADP'];
  public lineChartType: string = 'line';
  public pieChartType: string = 'pie';

  // Pie
  public pieChartLabels: string[] = ['HnS', 'Amazon', 'mRoads', 'HP', 'CapGemini', 'Genpact', 'TechMaindra', 'Epam', 'Robicon', 'ADP'];
  public pieChartData: number[] = [300, 500, 100, 28, 48, 40, 19, 86, 27, 90];

  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
