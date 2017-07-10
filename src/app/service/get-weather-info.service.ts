import { Injectable } from '@angular/core';
import { Http, Jsonp, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetWeatherInfoService {

	constructor(private http : Http, private jsonp : Jsonp) { }

	public get(id) : Observable<any> {
		let url = 'http://192.168.33.10:18456/weather/' + id;
		let params = new URLSearchParams();
		params.set('callback', 'JSONP_CALLBACK');
		return this.http.get(url, params).map(res => res.json());

	}

}
