
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
    board.appendChild(cardElement);

    }
}


function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2015/08/11/11/57/spades-884197_1280.png'>"; // king
	} else {
		this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2015/08/11/11/57/spades-884203_1280.png'>"; //queen
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
	}
}
function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
		window.location.reload();
	} else {
		alert("Sorry, try again.");
		window.location.reload();
	}
}
createBoard();

