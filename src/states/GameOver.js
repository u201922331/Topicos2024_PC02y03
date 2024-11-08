import Phaser from "phaser";

class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");

        this.bg = null;

        this.score = null;
        
        this.textGameOver = null;
        this.textScore = null;
        this.fontStyle = null;
    }

    create(finalScore) {
        this.bg = this.add.sprite(0, 0, 'game-over').setOrigin(0, 0);
        this.fontStyle = {
            font: '20px Arial',
            fill: '#FFCC00',
            stroke: '#333',
            strokeThickness: 5
        };
        this.score = finalScore;
        this.textTitle = this.add.text(0, 0, "YA ME FUI LA BIKA G_G", this.fontStyle);
        this.textScore = this.add.text(0, this.textTitle.height, "Puntaje obtenido: " + this.score, this.fontStyle);
    }

    update() {
        this.input.on('pointerdown', () => this.toMenu());
    }

    toMenu() {
        this.scene.start('Menu');
    }
};

export default GameOver;