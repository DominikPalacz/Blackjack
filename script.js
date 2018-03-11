let characters = ['clubs ♣', 'diamonds ♦', 'hearts ♥', 'spades ♠']; // zmienna z kolorami
let cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']; //// zmienna z znakami

// zmienne pobierajace zawartosc paragrafu i przyciskow metoda getElementById wg. ich id="tak jak nazwane"
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

hitButton.style.display = 'none'; // ukrycie widocznosci przycisku
stayButton.style.display = 'none'; // ukrycie widocznosci przycisku

// event wywolany po kliknieciu na przycisk 'new-game-button'
newGameButton.addEventListener('click', function() {
  textArea.innerText = 'Start'; // wyswietlenie tekstu 
  newGameButton.style.display = 'none'; // ukrycie widocznosci przycisku
  hitButton.style.display = 'inline'; // pokazanie widocznosci przycisku
  stayButton.style.display = 'inline'; // pokazanie widocznosci przycisku
});

// funkcja tworzaca talie 52 kart
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

// funkcja robiaca napis
function getCardString(card) {
  return card.suit + ' of ' + card.value;
};

// pobierz kolejna karte
function getNextCard() {
  return deck.shift()
};

// zmienna z talia kart
let deck = createDeck();

// karty gracza
let playerCards = [getNextCard(), getNextCard()];

console.log('Welcome to Blackjack!');
console.log('You are dealt: ');
console.log(getCardString( playerCards[0] ));
console.log(getCardString( playerCards[1] ));
