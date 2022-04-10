import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GeoIpService {

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
  ) { }

  public getGeoIpInfo = async (ipAddress: string) => {
    return this.http.get(`http://localhost:5500/geoIp/${ipAddress}`).toPromise().catch(err => {
      console.error(err);
      this._snackBar.open('failed to lookup', 'Failed');
    });
  }
}
