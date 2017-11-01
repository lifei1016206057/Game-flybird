/*
* @Author: lifei
* @Date:   2017-11-01 14:52:42
* @Last Modified by:   lifei
* @Last Modified time: 2017-11-01 16:00:53
*/
class Land extends autoElement {
	constructor() {
		super("land")
	}
	setup() {
		super.setup()
		this.width = 300
		this.height = 50
		this.x = 0
		this.y = 450
	}
	update() {
		Const.landFps--
		if (Const.landFps <= 0) {
			Const.landFps = 3
			this.x += -3 * Const.speedX.land
		} else {
			this.speedX = Const.speedX[this.name]
		}

	}
}

class LandArr {
	constructor() {
		this.elements = []
		this.setup()
	}
	setup() {
		let num = 5
		for(var i = 0 ; i < num ; i++) {
			let land = new Land()
			land.x = i * 100
			this.elements.push(land)
		}
	}
}