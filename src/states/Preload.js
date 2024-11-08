import Phaser from "phaser";

class Preload extends Phaser.Scene {
    constructor() {
        super({key: 'Preloader'});
    }

    preload() {
        this.load.image('menu', '../assets/fondos/menu.png');
        this.load.image('game', '../assets/fondos/game.png');
        this.load.image('game-over', '../assets/fondos/gam-over.jpg');
        this.load.image('player', '../assets/player.png');
        this.load.image('yellow', '../assets/amarillo.png');
        this.load.image('red', '../assets/rojo.png');
        this.load.image('green', '../assets/verde.png');
    }

    create() {
        this.scene.start('Menu');
    }
};

export default Preload;