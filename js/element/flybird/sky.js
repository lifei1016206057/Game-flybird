/*
* @Author: lifei
* @Date:   2017-11-01 14:52:27
* @Last Modified by:   lifei
* @Last Modified time: 2017-11-01 15:20:13
*/
class Sky extends autoElement {
	constructor() {
		super("sky")
	}
	setup() {
		super.setup()
		this.width = Const.width
		this.height = Const.height
	}
}