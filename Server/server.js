// === ミドルウェア
var express = require('express');
var jsonp = require('jsonp-express');
var bodyParser = require('body-parser');
var XMLHttpRequest = require('xmlhttprequest');
var xml = XMLHttpRequest.XMLHttpRequest;
var Server = (function () {
    function Server() {
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
    Server.prototype.settingMiddleware = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            next();
        });
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(jsonp);
    };
    ;
    /**
     * コントローラの設定
     * @private
     * @return {void}
     */
    Server.prototype.settingController = function () {
    };
    /**
     * APIの設定
     * @private
     */
    Server.prototype.settingApi = function () {
        this.app.get('/weather/:id', function (req, res) {
            console.log('weather... GET');
            var request = new xml();
            var url = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=';
            request.open('GET', url + req.params.id, false);
            request.send();
            var result = JSON.parse(request.responseText);
            console.log(typeof (result));
            res.status(200).send(result);
        });
    };
    /**
     * サーバーの開始
     * @private
     * @return {void}
     */
    Server.prototype.start = function () {
        // サーバーの開始
        console.log('start...');
        this.app.listen('18456');
        // this.app.listen('18456', function() {
        // 	logger.system.info('Main - ListenStart...');
        // });
    };
    return Server;
})();
var main = new Server();
