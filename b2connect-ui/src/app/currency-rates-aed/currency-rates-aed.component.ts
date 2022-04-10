import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { GraphSeedService } from 'src/services/graph-seed.service';

@Component({
  selector: 'app-currency-rates-aed',
  templateUrl: './currency-rates-aed.component.html',
  styleUrls: ['./currency-rates-aed.component.css']
})
export class CurrencyRatesAedComponent implements OnInit {

  chartOption: EChartsOption = {};

  constructor(
    private graphSeedService: GraphSeedService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.graphSeedService.getCurrencyRatesByAED().subscribe(res => {
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
