import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-weather-view',
	templateUrl: './weather-view.component.html',
	styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {
	/**
	 * 都市ID
	 * @type {string}
	 */
	@Input('weatherInfo') weatherInfo : Object;

	constructor() {
	}

	ngOnInit() {
	}

}
