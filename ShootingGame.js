class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(enemy) {
        enemy.health -= this.power;
        // console.log(`${this.name} hits ${enemy.name} with power ${this.power}`);
        // console.log(enemy.health);
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(_player1, _player2) {
        this.player1 = _player1;
        this.player2 = _player2;
    }

    getRandomItem() {
        let healthOrPower = Math.random() < 0.5;
        // console.log(healthOrPower *10);

        if (healthOrPower *10) {
            return {
                health: 10,
                power:0
            }
        } else {
            return {
                health:0,
                power:10
            };
        }
    }

    start() {
        let player1 = this.player1;
        let player2 = this.player2;

        while (true) {
            console.log("BEFORE --->>>>");
            this.player1.showStatus();
            // console.log(this.player1);
            this.player2.showStatus();
            
            let player1Item = this.getRandomItem();
            // console.log(player1Item);
            let player2Item = this.getRandomItem();
            // console.log(player2Item);

            this.player1.useItem(player1Item);
            // console.log(this.player1.useItem(player1Item));
            this.player2.useItem(player2Item);
            console.log("AFTER GET RANDOM ITEM ----->>>>");
            console.log("Player 1️⃣ dapat item ", player1Item);
            console.log("Player 2️⃣ dapat item ", player2Item);
            this.player1.showStatus();
            // console.log(this.player1);
            this.player2.showStatus();

            player1.hit(player2);
            player2.hit(player1);
            console.log("AFTER SHOOT 🔫----->>>>");
            this.player1.showStatus();
            this.player2.showStatus();

            if (player2.health <= 0) {
                console.log(`${player2.name} LOSSSSSE :( ${player1.name} WIIINNSSS :) `);
                break;
            } else if(player1.health <= 0){
                console.log(`${player2.name} WIIINSSS :( ${player1.name} LOOOSSSE :) `);
                break;
            }

        }
    }
}

let playerA = new Player("WUKONG");
let playerB = new Player("SILUMAN ANGIN");

let game = new ShootingGame(playerA, playerB);
game.start();
