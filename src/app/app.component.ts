import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

interface HourData {
  hour: string;
  visitorCounts: number;
}

interface DayData {
  dayOfWeek: string;
  visitorCounts: number;  
  hours: HourData[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  data: DayData[] = [];
  selectedDay?: DayData;
  selectedChartType: 'line' | 'column' | 'pie' = 'column';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<DayData[]>('assets/visitor-data.json').subscribe((res) => {
      this.data = res;
      this.selectedDay = this.data[0];
      this.buildChart(this.selectedDay!);
    });
  }

  buildChart(day: DayData): void {
    if (!day) return;

    const hours = day.hours.map((h) => h.hour);
    const visitors = day.hours.map((h) => h.visitorCounts);

    this.chartOptions = {
      chart: { type: this.selectedChartType },
      title: { text: `Hourly Visitors - ${day.dayOfWeek}` },
      xAxis: { categories: hours, title: { text: 'Hour' } },
      yAxis: { title: { text: 'Visitor Count' } },
      accessibility: { enabled: false },
      tooltip: { pointFormat: '{series.name}: <b>{point.y}</b>' },
      plotOptions: {
        series: { dataLabels: { enabled: true } },
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y}',
          },
        },
      },
      series: [
        {
          type: this.selectedChartType,
          name: day.dayOfWeek,
          data:
            this.selectedChartType === 'pie'
              ? day.hours.map((h) => ({
                  name: h.hour,
                  y: h.visitorCounts,
                }))
              : visitors,
        },
      ],
    };
  }

  onDayChange(day: string): void {
    const found = this.data.find((d) => d.dayOfWeek === day);
    if (found) {
      this.selectedDay = found;
      this.buildChart(found);
    }
  }

  changeChartType(): void {
    if (this.selectedDay) this.buildChart(this.selectedDay);
  }

  getPercent(count: number): number {
    return this.selectedDay
      ? (count / this.selectedDay.visitorCounts) * 100  
      : 0;
  }
}
