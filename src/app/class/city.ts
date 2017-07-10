export class City {
	/**
	 * ID
	 * @type {string}
	 */
	private id : string;

	/**
	 * 都市名
	 * @type {string}
	 */
	private name : string;

	/**
	 * @constructor
	 * @param  {[type]} id   [description]
	 * @param  {[type]} name [description]
	 * @return {[type]}      [description]
	 */
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

}
