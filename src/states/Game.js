import Phaser from "phaser";

class Game extends Phaser.Scene {
    constructor() {
        super('Game')
        this.bg = null;
        this.time = null;
        this.score = null;
        this.lives = null;
        this.player = null;

        this.textTime = null;
        this.textScore = null;
        this.textLives = null;
        this.fontStyle = null;
    }

    create() {
        this.bg = this.add.sprite(0, 0, 'game').setOrigin(0, 0);
        this.time = 0;
        this.score = 0;
        this.lives = 3;
        this.player = this.add.sprite(this.bg.width / 2, this.bg.height / 2, 'player').setOrigin(0, 0);

        this.fontStyle = this.fontStyle = {
            font: '40px Arial',
            fill: '#FFCC00',
            stroke: '#333',
            strokeThickness: 5
        };

        this.textTime = this.add.text(0, 0, "Tiempo: " + this.time, this.fontStyle);
        this.textScore = this.add.text(this.bg.width / 2, 0, "Puntaje: " + this.score, this.fontStyle);
        this.textLives = this.add.text(0, this.textTime.height, "Vidas: " + this.lives, this.fontStyle);
    }

    compareSprites(sprite1, sprite2) {
        return sprite1.texture == sprite2.texture
    }
};

export default Game;