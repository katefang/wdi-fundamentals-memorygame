let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("user flipped " + cardsInPlay[0]);

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("user flipper " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[2]) {
    alert ("You found a match!");
  }
  else {
    alert ("Sorry, try again."); 
  }
}
