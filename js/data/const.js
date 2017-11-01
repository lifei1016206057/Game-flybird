/*
* @Author: lifei
* @Date:   2017-10-17 15:28:46
* @Last Modified by:   lifei
* @Last Modified time: 2017-11-01 15:55:07
*/

'use strict';

var Const = {
        width: 500,
        height: 500,
        debug: true,
        paused: false,
        fps: 60,
        sence: null,
        senceTitle: null,
        senceEnd: null,
        sence_num: 1,
        sence_all: 0,
        speed: {        //speedY
            player: 5,
            clouds: 1,
            bullet: -10,
            enemy_1: 1,
            enemy_2: 2,
            enemy_3: 3,
        },
        speedX: {
            land: -5,
        },
        life: {
            player: 1,
            enemy_1: 1,
            enemy_2: 1,
            enemy_3: 1,
        },
        enemyNum: {
            enemy_1: 1,
            enemy_2: 1,
            enemy_3: 2,
        },
        bulletFps: 10,
        landFps: 3,
    }