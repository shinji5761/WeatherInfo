import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { City } from '../class/city';

@Component({
	selector: 'app-city-input-form',
	templateUrl: './city-input-form.component.html',
	styleUrls: ['./city-input-form.component.css']
})
export class CityInputFormComponent implements OnInit {
	@Output() changeCity = new EventEmitter();

	/**
	 * 選択した都市
	 * @type {string}
	 */
	selected_city : string = '';

	/**
	 * 都市リスト
	 * @type {Array<City>}
	 */
	city_list : Array<City> = [
		new City('130010', '東京'),
		new City('230010', '名古屋')
	];

	constructor() { }

	ngOnInit() {
	}

	/**
	 * 都市変更処理
	 */
	private changeSelectedCity() : void {
		console.log('changeCity');
		this.changeCity.emit(this.selected_city);
	}



}
