let characters = ['clubs ♣', 'diamonds ♦', 'hearts ♥', 'spades ♠'];
let cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

function createDeck() {
  let deck = [];
  for (i=0; i<characters.length; i++) {
    for (j=0; j<cards.length; j++) {
      let card = {
        suit: cards[j],
        value: characters[i]
      };
      deck.push(card);
    };
  };
  return deck;
};

function getCardString(card) {
  return card.suit + ' of ' + card.value;
};

function getNextCard() {
  return deck.shift()
};

let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];

console.log('Welcome to Blackjack!');
console.log('You are dealt: ');
console.log(getCardString( playerCards[0] ));
console.log(getCardString( playerCards[1] ));
