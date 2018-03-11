let characters = ['clubs ♣', 'diamonds ♦', 'hearts ♥', 'spades ♠'];
let cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
let deck = [];

for (i=0; i<characters.length; i++) {
  for (j=0; j<cards.length; j++) {
    deck.push(characters[i] + ' of ' + cards[j] );
  };
};

console.log('Welcome to Blackjack!');
console.log(deck);
