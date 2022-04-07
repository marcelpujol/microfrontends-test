import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MeteoService } from './services/meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'application2';

  weather: any;

  constructor(private meteoService: MeteoService) {
  }

  ngOnInit(): void {
    this.getWeatherInfo();
  }

  private async getWeatherInfo() {
    const weather$ = this.meteoService.getWeather();
    this.weather = await lastValueFrom(weather$);
  }
}
