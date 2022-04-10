import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { GraphSeedService } from 'src/services/graph-seed.service';

@Component({
  selector: 'app-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.css'],
})
export class CurrencyRatesComponent implements OnInit {

  chartOption: EChartsOption = {};

  constructor(
    private graphSeedService: GraphSeedService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.graphSeedService.getCurrencyRates().subscribe(res => {
      this.chartOption = {
        xAxis: {
          type: 'category',
          data: Object.keys(res || {}),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: Object.values(res || {}),
            type: 'line',
          },
        ],
      };
    });
  }

}
