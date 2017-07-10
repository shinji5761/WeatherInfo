import { Component } from '@angular/core';
import { GetWeatherInfoService } from './service/get-weather-info.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers : [GetWeatherInfoService]
})
export class AppComponent {
	weatherInfo : any;

	constructor(private getWeather : GetWeatherInfoService) {
	}

	private onChangeCity(city_id : string) :void {
		// サービスで都市の天気を取得
		this.getWeather.get(city_id)
		.subscribe(
			(result) => {
				console.log('Success');
				this.weatherInfo = result;
			},
			(error) => {
				console.error('Error');
			}
		);
	}
}
