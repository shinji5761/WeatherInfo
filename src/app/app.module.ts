import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }	 from '@angular/forms';

import { AppComponent } from './app.component';
import { CityInputFormComponent } from './city-input-form/city-input-form.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
	declarations: [
	AppComponent,
	CityInputFormComponent,
	WeatherViewComponent,
	],
	imports: [
		BrowserModule,
		ChartsModule,
		HttpModule,
		JsonpModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
