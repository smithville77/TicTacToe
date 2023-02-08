

// factory function to create players
const playerFactory = (name, marker, myTurn) => {
  return {name, marker, myTurn};
};


let gameBoard = {
  board: ["A", "D", "A",
  "M", "X", "O",
  "X", "O", "X"]
};


const player = playerFactory("Adam", "X", true);
const computer = playerFactory("Computer", "O", false);



//creates div elements from array and displays them
const displayBoard = document.getElementById("gameboard")
function displayGame() {
    for(let i = 0; i < gameBoard.board.length; i++) {
    let square = document.createElement("div")
    square.innerHTML = gameBoard.board[i]
    displayBoard.appendChild(square).setAttribute("id", `board:${[i]}`)
    }
}


  
//toggle turn function --- changes myTurn from true/false for both players
function togglePlayerTurn() {
  if(player.myTurn && !computer.myTurn) {
    player.myTurn = !player.myTurn;
    computer.myTurn = !computer.myTurn;
  }
}

function handleTurn() {
  if (player.myTurn) {
    innerHTML(player.marker)
  }
  togglePlayerTurn();
}

// controls game flow
const gameFlow = (() => {
  let totalMoves = 0;
  while (totalMoves != 9) {
    // if(player.myTurn === true) {

    // }

  // toggle "myTurn = true/false"
  // add onClick event listener to divs in gameBoard, add players "marker" value to the div
  // add logic to tell who wins or if the game is a draw

  }
});




displayGame()
const board0 = document.getElementById("board:0").addEventListener("click", () => handleTurn())
const board1 = document.getElementById("board:1").addEventListener("click", () => console.log("hi"))
const board2 = document.getElementById("board:2").addEventListener("click", () =>  console.log("hi"))
const board3 = document.getElementById("board:3").addEventListener("click", () =>  console.log("hi"))
const board4 = document.getElementById("board:4").addEventListener("click", () =>  console.log("hi"))
const board5 = document.getElementById("board:5").addEventListener("click", () =>  console.log("hi"))
const board6 = document.getElementById("board:6").addEventListener("click", () =>  console.log("hi"))
const board7 = document.getElementById("board:7").addEventListener("click", () =>  console.log("hi"))
const board8 = document.getElementById("board:8").addEventListener("click", () =>  console.log("hi"))



