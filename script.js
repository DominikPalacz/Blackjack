// Card vaiables (zmienna z kolorami oraz zmienna z znakami)
let suits = ['clubs', 'diamonds', 'hearts', 'spades']; 
let values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

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
  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  
  
  newGameButton.style.display = 'none'; // ukrycie widocznosci przycisku
  hitButton.style.display = 'inline'; // pokazanie widocznosci przycisku
  stayButton.style.display = 'inline'; // pokazanie widocznosci przycisku
  showStatus();
});

// Event implementacja przycisku hit
hitButton.addEventListener('click', function() {
  playerCards.push(getNextCard());
  checkGameOver();
  showStatus();
});

// Event implementacja przycisku stay
stayButton.addEventListener('click', function() {
  gameOver = true;
  checkGameOver();
   showStatus();
});

// funkcja tworzaca talie 52 kart
function createDeck() {
  let deck = [];
  for (suitIdx=0; suitIdx<suits.length; suitIdx++) {
    for (valueIdx=0; valueIdx<values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    };
  };
  return deck;
};

function shuffleDeck(deck) {
  for (i=0; i<deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

// funkcja robiaca napis
function getCardString(card) {
  return card.value + ' of ' + card.suit;
};

// pobierz kolejna karte
function getNextCard() {
  return deck.shift()
};

function getCardNumbericValue(card) {
  switch(card.value) {
    case 'Ace':
    return 1;
    case '2':
    return 2;
    case '3':
    return 3;
    case '4':
    return 4;
    case '5':
    return 5;
    case '6':
    return 6;
    case '7':
    return 7;
    case '8':
    return 8;
    case '9':
    return 9;
    default:
    return 10;
  }
}

function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (i=0; i<cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumbericValue(card);
    if (card.value === "Ace") {
      hasAce = true;
    }
  }
  if (hasAce && score +10 <= 21) {
    return score + 10;
  }
  return score;
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function checkGameOver() {
  updateScores();
  
 if (gameOver) {
    // let dealer take cards
    while(dealerScore < playerScore
          && playerScore <= 21
          && dealerScore <= 21) {
      dealerCards.push(getNextCard());
      updateScores();
    }
  }
  
  
  if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  }
  else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  }
  else if (gameOver) {
    
    if (playerScore > dealerScore) {
      playerWon = true;
    }
    else {
      playerWon = false;
    }
  }
};

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to Blackjack!';
    return;
  }
  
  let dealerCardString = '';
  for ( i = 0; i < dealerCards.length; i++) {
  dealerCardString += getCardString(dealerCards[i]) + '\n';
}

  let playerCardString = '';
  for ( i = 0; i < playerCards.length; i++) {
  playerCardString += getCardString(playerCards[i]) + '\n';
}

updateScores();
  
textArea.innerText =
  'Deler has:\n' +
  dealerCardString +
  '(score: ' + dealerScore + ') \n \n' +
  
  'Player has:\n' +
  playerCardString +
  '(score: ' + playerScore + ') \n \n';
  
if (gameOver) {
  if (playerWon) {
    textArea.innerText += "YOU WON!";
  }
  else {
    textArea.innerText += "YOU LOST!";
  }
  newGameButton.style.display = 'inline';
  hitButton.style.display = 'none' ;
  stayButton.style.display = 'none';
}
};