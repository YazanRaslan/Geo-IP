import { Component, OnInit } from '@angular/core';
import { GeoIpService } from 'src/services/geo-ip.service';

@Component({
  selector: 'app-geo-ip',
  templateUrl: './geo-ip.component.html',
  styleUrls: ['./geo-ip.component.css'],
})
export class GeoIpComponent implements OnInit {

  public ipAddress = '';
  public ipInfo = null;

  constructor(
    private geoIpService: GeoIpService,
  ) { }

  ngOnInit(): void {
  }

  getGeoInfo = async () => {
    this.ipInfo = await this.geoIpService.getGeoIpInfo(this.ipAddress) || null;
  }

}
