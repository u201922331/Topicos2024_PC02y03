import Phaser from "phaser";

class Preload extends Phaser.Scenes {
    constructor() {
        super({key: 'Preloader'});
    }

    preload() {
        this.preload.images('menu', '../assets/fondos/menu.png');
        this.preload.images('game', '../assets/fondos/game.png');
        this.preload.images('game-over', '../assets/fondos/gam-over.jpg');
        this.preload.images('player', '../assets/player.png');
        this.preload.images('yellow', '../assets/amarillo.png');
        this.preload.images('red', '../assets/rojo.png');
        this.preload.images('green', '../assets/verde.png');
    }

    create() {
        this.scene.start('Menu');
    }
};

export default Preload;