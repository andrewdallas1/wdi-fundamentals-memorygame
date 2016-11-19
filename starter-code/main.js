console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardTwo === cardFour){
	alert("You found a match!")
}else if (cardOne === cardTwo){
	alert("You found a match!")
}else if (cardThree === cardFour){
	alert("You found a match!")
}else {
	alert("Sorry, try again.")
}*/

var board = document.getElementById('game-board');
var createBoard = function () {
    for (var i=0; i<4; i++) {
        var newCardElement = document.createElement('div');
        newCardElement.className = 'card';
        board.appendChild(newCardElement);
    }
}
createBoard();