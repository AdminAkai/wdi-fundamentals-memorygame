const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

const cardsInPlay = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // Fisher-Yates shuffle solution
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

function resetCardsInPlay() {
    for (i = 0; i < 2; i++) {
        cardsInPlay.pop();
    }
}

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
            resetCardsInPlay();
        } else {
            alert("Sorry, try again.");
            resetCardsInPlay();
        }
    }
}

function flipCard() {
    cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
}

function createBoard() {
    shuffle(cards);
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.className = "cards";
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

function resetBoard() {
    var removeCards = document.getElementById('game-board');
    while (removeCards.hasChildNodes()) {
        removeCards.removeChild(removeCards.firstChild);
        cardsInPlay.pop();
    }
    createBoard();
}

function newGame() {
    document.getElementById('reset').addEventListener('click', resetBoard);
}


createBoard();
newGame();
