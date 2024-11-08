import Phaser from "phaser";

class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");

        this.bg = null;
        
        this.textTitle = null;
        this.textStudent = null;
        this.fontStyle = null;
    }

    create() {
        this.bg = this.add.sprite(0, 0, 'menu').setOrigin(0, 0);
        this.fontStyle = {
            font: '20px Arial',
            fill: '#FFCC00',
            stroke: '#333',
            strokeThickness: 5
        };
        this.textTitle = this.add.text(0, 0, "Bica 4 life G_G and forever", this.fontStyle);
        this.textStudent = this.add.text(0, this.textTitle.height, "Nander Emanuel Melendez Huamanchumo", this.fontStyle);
    }

    update() {
        this.input.on('pointerdown', () => this.startGame());
    }

    startGame() {
        this.scene.start('Game');
    }
};

export default Menu;