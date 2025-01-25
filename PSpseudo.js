// Server Side
const gameObject = {
  roomCode: "",
  gameType: 0,
  currentTurnNumber: 0,
  gameMessage: "",
  winningCard: [],
  winnerPlayer: {},
  teamA: [],
  teamB: [],
  gamePlayers: [
    {
      roomCode: "",
      customName: "",
      defaultName: "Player 1",
      hand: [],
      tableCard: [],
      stashDeck: [],
      books: [],
      hasTakenTurn: false,
    },
    {
      roomCode: "",
      customName: "",
      defaultName: "Player 2",
      hand: [],
      tableCard: [],
      stashDeck: [],
      books: [],
      hasTakenTurn: false,
    },
    {
      roomCode: "",
      customName: "",
      defaultName: "Player 3",
      hand: [],
      tableCard: [],
      stashDeck: [],
      books: [],
      hasTakenTurn: false,
    },
    {
      roomCode: "",
      customName: "",
      defaultName: "Player 4",
      hand: [],
      tableCard: [],
      stashDeck: [],
      books: [],
      hasTakenTurn: false,
    },
  ],
};

function createGame() {}

function joinGame() {}

function shuffleAndDistrubuteCards(gameObject) {
  if (gameObject.gameType == 1) {
    // shuffle/ randomize deck
    // divide deck into 2 arrays and pass them to each player hand property
    // send updated gameObject to client
  } else if (gameObject == 2) {
    // shuffle/ randomize deck
    // divide deck into 4 arrays and pass them to each player hand property.
    // send updated gameObject to client
  } else {
    console.log("error with shuffleing deck.");
  }
}

function determineTurn(clientData, playerTableCard) {
  if (gameObject.gameType == 1) {
    // storing game player count into an array
    let playerCount = gameObject.gamePlayers.length;
    // iterator
    let i = 0;

    // looping through each player based on the number of players
    for (i; i < playerCount; i++)
      if (gameObject.gamePlayers.hasTakenTurn == true) {
        evaluateCards(clientData, gameObject);
      } else {
        // if the player is the same value as the current turn number ...
        if (clientData.gamePlayers[i] === gameObject.currentTurnNumber) {
          // set the table card to the card they played to the global game object ...
          gameObject.gamePlayers[i].tableCard = playerTableCard;
          if (clientData.gamePlayers[i] == 2) {
            // if there are only 2 players, there is no one else to increment to. So this needs to be reset to 0 or the first player
            // in the array so that they may take their turn.

            // this will apply similarly for 2 v 2 but the limit is 4.
            gameObject.currentTurnNumber == 0;
            // return updated Game object data to client.
          } else {
            // increase the gameTurnNumber counter by 1 so that the next player can take their turn
            gameObject.currentTurnNumber += 1;
            // send new gameObject data to client/
          }
        }
      }
  } else {
    console.log("there was an error determining who the next player is.");
  }
}

function evaluateCards(clientData, gameObject) {
  // run basic spades logic and determine winning card.
  // remove table cards for all players.
  // loop through all player hands
  // --> IF all the player hands is 0 --> end the game
  // --> ELSE --> update the books property, update the hand by removing the card from play, set the winning player to the winning player
  // set the currentTurnNumber to the winning players number.
}

// Client Side
// keep state --> primary cli logic should be the following:
//  show user their cards
//  be able to play a card, if it there turn
//  see updated game state and notifications 

let myData = ''
let cli_currentTurnNumber;
let cliData = gameObject;
function createGameHost() {}
function joinGameGuest() {}

function submitCards(cli_currentTurnNumber) {
  if (gameObject.currentTurnNumber != cli_currentTurnNumber) {
    console.log("Sorry, it is not your turn yet.");
  } else {
    if (turnPhase == 0) {
      // allow user to stash card
    } else if (turnPhase == 1) {
      // Allow user to play card
      // Emit table and stash data to server
      // Reset phase counter to 0
    }
  }
}

// socket listener for recieving and updating game data.

function showServerMessage() {
  // recieve and display message from server
}
