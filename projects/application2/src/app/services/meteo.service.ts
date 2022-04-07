import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private readonly latitude: number = 41.50;
  private readonly longitude: number = 2.14;

  constructor(private httpClient: HttpClient) { }

  public getWeather(): Observable<any> {
    return this.httpClient.get(`${environment.meteoUrl}/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true`)
      .pipe(
        map(response => (response as any).current_weather)
      );
  }
}
