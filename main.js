const state = function initialize(){

}
initialize();

//let render = function render( , ) {

//};
//render();

/*----- constants -----*/
const squaresChosen = {
    'null': 'white',
    '1': 'red',
    '-1': 'blue'
    };
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];    
  const gameBoard = [1 , 2, 3, 4, 5, 6, 7, 8, 9 ];

  let turn = '1' || '-1';
  
  let winner = score {
    won: playerScore > computerScore || playerScore < computerScore;
    tie: playerScore === computerScore;
    gameInPlay: playerChoices < turn && computerChoices < turn;
    }
    
let squares = document.querySelctorAll(‘td div’);
let message = document.querySelector(‘h1’);

/*----- app's state (variables) -----*/
let board = newArray(9).fill(null);

let player1= ‘x’;
let player-1 = ‘o’;
let winner = 'null';
/*----- cached element references -----*/

 function getWinner() {
    if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
    if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
    if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
    if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
    if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
    if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
    if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
    if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
    if (board.includes(null)) return null;
    return 'T';
  }
function render() {
    board.forEach(function(sq, idx) {
      squares[idx].style.background = squaresChosen[sq];
    });

 if (winner === 'T'){
     message.innerHTML = 'oops! a tie';
 }   else if (winner) {
     message.innerHTML = `congrats ${lookup[winner].toUppercase()}!`;
 } else {
     message.innerHTML = `${lookup[turn].toUpperCase()}'s turn`;
 }


/*----- event listeners -----*/

/*----- functions -----*/
