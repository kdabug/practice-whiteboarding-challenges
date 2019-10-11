//PROBLEM
//Write a program that creates a tic tac toe game;
//CHALLENGE: add an option for a computer opponent;

//PHASE ONE: QUESTIONS & PSEUDOCODE

//PHASE TWO: CODE
class TicTacToeGame {
  constructor() {
    this.currentBoard = [[[], [], []], [[], [], []], [[], [], []]];
    this.numPlayers = null;
    this.currentPlayer = null;
    this.nextPlayer = null;
  }
  startGame(n) {
    if (n === 1 || n === 2) {
      this.numPlayers = n;
      this.currentPlayer = 1;
      console.log(`Your ${n} player game is ready to play.`);
      if (n === 1) {
        this.nextPlayer = "computer";
      } else {
        this.nextPlayer = 2;
      }
    } else {
      console.log(
        "You need to indicate the number of players (1 or 2) in the starting method."
      );
    }
  }

  move(arr) {
    if (this.currentPlayer) {
      if (!this.currentBoard[arr[0]][arr[1]]) {
        this.currentPlayer === 1
          ? (this.currentBoard[arr[0]][arr[1]] = "X")
          : (this.currentBoard[arr[0]][arr[1]] = "0");
        this.checkWin();
        this.switchPlayers();
      } else {
        console.log("This space already has a piece, choose another space");
      }
    }
  }

  //COMPUTER MAKES A MOVE
  computerMove(){
    let placing = true;
    while (placing){
        let a = 
        let b = 
    }
  }

  //SWAP CURRENT AND NEXT PLAYER
  switchPlayers() {
    let temp = this.currentPlayer;
    this.currentPlayer = this.nextPlayer;
    this.nextPlayer = temp;

    if(this.currentPlayer === 'computer'){
        console.log('The computer is making a move.')
        this.computerMove();
    }
  }

  //CHECK TO SEE IF THE MOVE WAS A WINNING MOVE
  checkWin(arr) {
    //check diagonals
    if (
      (this.currentBoard[0][0] == this.currentBoard[1][1] &&
        this.currentBoard[0][0] == this.currentBoard[2][2]) ||
      (this.currentBoard[0][2] == this.currentBoard[1][1] &&
        this.currentBoard[0][0] == this.currentBoard[2][0])
    ) {
      console.log(`Player ${this.currentPlayer} has won the game`);
    }

    //check vertical
    let verticalScore = 0;
    for (let i = 0; i < 3; i++) {
      if (this.currentboard[i][arr[1]] === this.currentBoard[arr[0]][arr[1]]) {
        verticalScore++;
      }
    }
    if (verticalScore === 3) {
      console.log(`Player ${this.currentPlayer} has won the game`);
    }

    //check horizontal
    let horizontalScore = 0;
    for (let i = 0; i < 3; i++) {
      if (this.currentboard[arr[0]][i] === this.currentBoard[arr[0]][arr[1]]) {
        horizontalScore++;
      }
    }
    if (horizontalScore === 3) {
      console.log(`Player ${this.currentPlayer} has won the game`);
    }
  }

  //SHOW THE GAME BOARD
  showBoard() {
    console.log(
      `${this.currentBoard[0]}\n${this.currentBoard[1]}\n${
        this.currentBoard[2]
      }`
    );
  }

  //SHOW THE CURRENT PLAYER
  showCurrentPlayer() {
    console.log(`The currentPlayer is ${this.currentPlayer}.`);
  }

  //RESET THE BOARD
  reset() {
    console.log("You are resetting the current gameboard.");
    this.currentBoard = [[[], [], []], [[], [], []], [[], [], []]];
  }
}

//PHASE THREE: TEST
let newGame = new TicTacToeGame();
console.log(newGame);
newGame.startGame(1);
console.log(newGame);
newGame.move([1, 1]);
console.log(newGame);
newGame.showBoard();

