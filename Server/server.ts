// === ミドルウェア
import express = require('express');
import jsonp = require('jsonp-express');
import bodyParser = require('body-parser');
import XMLHttpRequest = require('xmlhttprequest');
var xml = XMLHttpRequest.XMLHttpRequest;

class Server {
	app;

	controller;

	constructor() {
		console.log('constructor...');
		this.app = express();
		// ミドルウェアの設定
		this.settingMiddleware();

		// コントローラの設定
		this.settingController();

		// APIの設定
		this.settingApi();

		// Server開始
		this.start();
	}

	/**
	 * ミドルウェアの設定
	 * @private
	 * @return {void}
	 */
	private settingMiddleware() :void {
		this.app.use(function(req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
			next();
		});
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(jsonp);
	};
	/**
	 * コントローラの設定
	 * @private
	 * @return {void}
	 */
	private settingController() :void {
	}

	/**
	 * APIの設定
	 * @private
	 */
	private settingApi() :void {
		this.app.get('/weather/:id', (req, res) =>  {
			console.log('weather... GET');
			let request = new xml();
			let url = 'http://weather.livedoor.com/forecast/webservice/json/v1?city='
			request.open('GET', url + req.params.id, false);
			request.send()
			let result = JSON.parse(request.responseText);
			console.log(typeof(result));
			res.status(200).send(result);
		});
	}


	/**
	 * サーバーの開始
	 * @private
	 * @return {void}
	 */
	private start() :void {
		// サーバーの開始
		console.log('start...');
		this.app.listen('18456');
		// this.app.listen('18456', function() {
		// 	logger.system.info('Main - ListenStart...');
		// });
	}
}

var main: Server = new Server();
