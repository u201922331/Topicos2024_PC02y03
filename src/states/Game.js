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

        this.kW = null;
        this.kA = null;
        this.kS = null;
        this.kD = null;
    }

    create() {
        this.bg = this.add.sprite(0, 0, 'game').setOrigin(0, 0);
        this.time = 0;
        this.score = 0;
        this.lives = 3;
        this.player = this.add.sprite(this.bg.width / 2, this.bg.height / 2, 'player').setOrigin(0, 0);

        this.fontStyle = this.fontStyle = {
            font: '20px Arial',
            fill: '#FFCC00',
            stroke: '#333',
            strokeThickness: 5
        };

        this.textTime = this.add.text(0, 0, "Tiempo: " + this.time, this.fontStyle);
        this.textScore = this.add.text(this.bg.width / 2, 0, "Puntaje: " + this.score, this.fontStyle);
        this.textLives = this.add.text(0, this.textTime.height, "Vidas: " + this.lives, this.fontStyle);

        this.kW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.kA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.kS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.kD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        this.updateTime();
        this.setPlayerSprite();
        this.movePlayer();
    }

    setPlayerSprite() {
        if (this.kW.isDown) {
            this.player.setTexture('yellow');
        } else if (this.kA.isDown) {
            this.player.setTexture('player');
        } else if (this.kS.isDown) {
            this.player.setTexture('red');
        } else if (this.kD.isDown) {
            this.player.setTexture('green');
        }
    }

    compareSprites(sprite1, sprite2) {
        return sprite1.texture == sprite2.texture
    }

    updateTime() {
        this.time++;
        this.textTime.setText('' + Phaser.Math.RoundTo(this.time / 150));
    }

    movePlayer() {
        if (this.kW.isDown) {
            this.player.y -= 1;
        }
        if (this.kS.isDown) {
            this.player.y += 1;
        }
    }
};

export default Game;