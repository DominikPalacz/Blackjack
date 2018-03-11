// Card vaiables (zmienna z kolorami oraz zmienna z znakami)
let characters = ['clubs ♣', 'diamonds ♦', 'hearts ♥', 'spades ♠']; 
let cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

// DOM variables (zmienne pobierajace zawartosc paragrafu i przyciskow metoda getElementById wg. ich id="tak jak nazwane")
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

// Game variables

let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none'; // ukrycie widocznosci przycisku
stayButton.style.display = 'none'; // ukrycie widocznosci przycisku
showStatus();

// event wywolany po kliknieciu na przycisk 'new-game-button'
newGameButton.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  // zmienna z talia kart
  let deck = createDeck();
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  
  
  newGameButton.style.display = 'none'; // ukrycie widocznosci przycisku
  hitButton.style.display = 'inline'; // pokazanie widocznosci przycisku
  stayButton.style.display = 'inline'; // pokazanie widocznosci przycisku
  showStatus();
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

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to Blackjack!';
    return;
  }
};