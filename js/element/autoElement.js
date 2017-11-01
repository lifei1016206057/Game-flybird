/*
* @Author: lifei
* @Date:   2017-10-17 16:49:27
* @Last Modified by:   lifei
* @Last Modified time: 2017-11-01 15:26:43
*/

'use strict';
class autoElement {
    constructor(name) {
       this.name = name
       this.setup()
    }
    update() {
        this.speed = Const.speed[this.name]
        this.speedX = Const.speedX[this.name]
    }
    setup() {
    	var image = imageFormPath("img/" + this.name + ".png")
        this.x = 0
        this.y =  0
        this.width = image.width
        this.height = image.height
        this.speed = Const.speed[this.name]
        this.speedX = Const.speedX[this.name]
        this.image = image
        this.life = Const.life[this.name]
        this.survival = true
    }
    move() {
        this.y = this.speed ? this.y + this.speed : this.y
        this.x = this.speedX ? this.x + this.speedX : this.x
        if (this.y > Const.height) {
            this.y = -300
        }
    }
    kill() {
        this.life--
        if (this.life <= 0) {
            this.survival = false
        }
    }
}
