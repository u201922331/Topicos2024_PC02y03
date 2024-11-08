import Phaser from "phaser";
import Preload from "./states/Preload";
import Game from "./states/Game";
import Menu from "./states/Menu";

let config = {
    width: 640,
    height: 960,
    scene: [Preload,Menu,Game],
    scale:{
        mode: Phaser.Scale.FIT_PERFECT,
        autoCenter: Phaser.Scale.ALIGN
    },
    physics:{
        default : 'arcades'
    }
};

new Phaser.Game(config);