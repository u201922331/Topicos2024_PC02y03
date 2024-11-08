import Phaser from "phaser";

class Menu extends Phaser.Scenes {
    constructor() {
        super("Menu");

        this.bg = null;
        this.textTitle = null;
    }

    create() {
        this.bg = this.add.sprite(0, 0, 'background').setOrigin(0, 0);
    }

    startGame() {
        this.scene.start('Game');
    }
};

export default Menu;