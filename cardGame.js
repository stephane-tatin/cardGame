const readline = require("readline")

//Card Object

function Card(face, color) {
    this.face = face;
    this.color = color;

    if (Number.isInteger(face)) {
        this.value = face;
    } else if (face === "As") {
        this.value = 11;
    } else {
        this.value = 10;
    }

    this.getValue = function () {
        return this.value;
    }

    this.getColor = function () {
        return this.color;
    }

    this.getFace = function () {
        return this.face;
    }

}


//Player Object


function Player(name) {
    this.name = name
    this.cards = []
    this.facesScore = 0
    this.colorScore = 0

    this.getName = function () {
        return this.name
    }

    this.getCards = function () {
        return this.cards
    }

    this.getCardsList = function () {
        this.cards.forEach(card => {
            return card.color, card.face
        })
    }

    this.getFacesScore = function () {
        return this.facesScore
    }

    this.getColorScore = function () {
        return this.colorScore
    }

    this.addCard = function (card) {
        this.cards.push(card)
    }

    //Calculate all the scores
    this.calculateScore = function () {
        this.calculateColorScore()
        this.calculateFacesScore()
    }


    //fonction to calculate the faces score
    this.calculateFacesScore = function () {

        this.cards.forEach(card => {
            this.facesScore += card.getValue()
        });
    }

    //function to calculate the color score
    this.calculateColorScore = function () {
        let maxValue = 1
        let colorList = []
        let count = 1

        this.cards.forEach(card => colorList.push(card.color))
        colorList.sort()

        for (let i = 1; i < 5; i++) {
            if (colorList[i] === colorList[i - 1]) {
                count++
                if (maxValue < count) {
                    maxValue = count;
                }

            } else {
                count = 1
            }
        }
        this.colorScore = maxValue
    }

}

//create a deck with 52 cards
let createDeck = () => {
    let deck = []
    let color = ["Herz", "Pik", "Kreuz", "Karo"]
    let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Bube", "Dame", "König", "As"]
    for (let i = 0; i < color.length; i++) {
        for (let j = 0; j < value.length; j++) {
            deck.push(new Card(value[j], color[i]))
        }
    }
    return deck
}


//Distribute random cards to the player and remove them form the original deck
function distributeCardsToPlayer(deck, Player) {
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * deck.length)
        Player.addCard(deck[random])
        deck.splice(random, 1)
    }
}

//Function to compare the points and send a message with the winner
function countPoints(player, computer) {

    console.log("---- your hand -----")
    player.getCards().forEach(card => {
        console.log(card.getColor(), card.getFace())
    })

    console.log("---- the computer hand -----")
    computer.getCards().forEach(card => {
        console.log(card.getColor(), card.getFace())
    })


    if (player.getColorScore() > computer.getColorScore()) {
        console.log(`you have ${player.getColorScore()} colors and the computer ${computer.getColorScore()} you won !!!`)
    } else if (player.getColorScore() === computer.getColorScore() && player.getFacesScore() >= computer.getFacesScore()) {
        console.log(`you have the same amount of colors ${player.getColorScore()} but managed to beat the computer with the value of your cards (${player.getFacesScore()}). you won !!`)
    } else {
        console.log("the computer won")
    }

}

function beginGame(name) {

    let deck = createDeck()
    let human = new Player(name);
    let computer = new Player("computer")

    //distribute cards to the human player
    distributeCardsToPlayer(deck, human)

    //distribute cards to the computer player
    distributeCardsToPlayer(deck, computer)

    human.calculateScore()
    computer.calculateScore()

    countPoints(human, computer)

    rematch

    rl.question("do you want to do an other game(yes/no) ?", (answer) => {
        rematch(answer, human)

    })

}

function rematch(answer, human) {

    if (answer == "yes") {
        beginGame(human.getName())
    } else if (answer == "no") {
        console.log("next time then !")
        process.exit()
    } else {
        rl.question("please enter a valid answer (yes/no)", (answer) => {
            rematch(answer, human)
        })
    }

}


//creating interface to enter command in the console

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Do you want to play poker (yes) ? ", function (answer) {
    if (answer === "yes") {
        rl.question("What is your name ? ", function (name) {
            console.log(`${name} begins a game`);
            beginGame(name)
        });
    } else {
        console.log("next time then !")
        process.exit();
    }
});



