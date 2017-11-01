/*
* @Author: lifei
* @Date:   2017-11-01 14:48:54
* @Last Modified by:   lifei
* @Last Modified time: 2017-11-01 17:29:30
*/
class Bird extends autoElement {
	constructor() {
		super("birds")
		this.skip = 2
	}
	setup() {
		super.setup()
		this.image.width = 150
		this.width = 50
		this.height = 50
		this.x = 100
		this.y = 250
		this.swidth = 50
		this.sheight = 50
		this.sx = this.skip * 50
		this.sy = 0
	}
	update() {
		this.skip--
		if (this.skip < 0) {
			this.skip = 2
		}
	}
}