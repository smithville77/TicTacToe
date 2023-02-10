const displayBoard = document.getElementById("gameboard")
let gameWon = false;
let computerWon = false;
let playerWon = false;


// // factory function to create players
const playerFactory = (name, marker, myTurn) => {
  return {name, marker, myTurn};
};
const player = playerFactory(prompt("Please enter your name"), "X");
const computer = playerFactory("Computer", "O");

let gameBoard = {
  board: ["", "", "",
  "", "", "",
  "", "", ""]
};

function displayGame() {

  for (let i = 0; i < gameBoard.board.length; i++) {
    let square = document.createElement("div");
    square.textContent = gameBoard[i];
    square.setAttribute("id", `board:${[i]}`);
    displayBoard.appendChild(square);
    
  }
}


// ------------------------------------------------------------------------
let moveCounter = 9;
function gameFlow(event) {
  
  if (!event.target) return;

  let target = event.target;
  if (target.textContent === '') {
    if (moveCounter % 2 === 1) {
      target.textContent = player.marker;
      gameBoard.board[parseInt(target.id.split(':')[1])] = player.marker;
      moveCounter -= 1;
    } else if (moveCounter % 2 === 0) {

    let aiNumber = Math.floor(Math.random() * 8 + 1);
    let aiChoice = document.getElementById(`board:${aiNumber}`);
    if (aiChoice.textContent === "") {
        // keep below
        aiChoice.textContent = computer.marker;
        // gameBoard.board[parseInt(target.id.split(":")[1])] = computer.marker;
        moveCounter -= 1;
      } 
    }
    checkForWin();
    checkForTie();
  
  }
}




// --------------------------------------------------------------------

// setTimeout(function() {
//   let event = new MouseEvent('click', {
//     'view': window,
//     'bubbles': true,
//     'cancelable': true
//   });

//   let target = document.getElementById('some-element');
//   target.dispatchEvent(event);
// }, 3000);
//random id for AI
// function randomID() {
//   let aiNumber = Math.floor(Math.random() * 8 + 1)
//   return aiNumber
// }

let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById("myModal")
let modalText = document.getElementById("modal-text")
function modalFunc() {
  
  if (gameWon === true && playerWon === true) {
    modal.style.display = "block";
    console.log(gameBoard.board)
    modalText.textContent = `${player.name} wins!`
  } else if (gameWon === true && computerWon === true) {
    modal.style.display = "block";
    modalText.textContent = "computer wins!"
  } else if (moveCounter === 0 && gameWon === false) {
    modal.style.display = "block";
    modalText.textContent = "It's a tie!"
    }
//resets game
  span.onclick = function() {
    refresh()
    modal.style.display = "none";
  }
  
}
//function that resets game
function reset() {
  gameWon = false;
  computerWon = false;
  playerWon = false;
  moveCounter = 9;
  displayBoard.textContent= "";
}
function refresh() {
  window.location.reload("Refresh")
}

displayGame()
displayBoard.addEventListener('click', (event) => gameFlow(event))

function checkForWin() {
  if (gameBoard.board[0] === "X" && gameBoard.board[1]  === "X" && gameBoard.board[2]  === "X") {
    gameWon = true
    playerWon = true
    modalFunc()
    
  } else if (gameBoard.board[3] === "X" && gameBoard.board[4] === "X" && gameBoard.board[5] === "X") {
    gameWon = true
    playerWon = true
    modalFunc()
    } else if (gameBoard.board[6] === "X" && gameBoard.board[7] === "X" && gameBoard.board[8] === "X") {
      gameWon = true
      playerWon = true
      modalFunc()
    } else if (gameBoard.board[0] === "X" && gameBoard.board[3] === "X" && gameBoard.board[6] === "X") {
      gameWon = true
      playerWon = true
      modalFunc()
    } else if (gameBoard.board[1] === "X" && gameBoard.board[4] === "X" && gameBoard.board[7] === "X") {
      gameWon = true
      playerWon = true
      modalFunc()
    } else if (gameBoard.board[2] === "X" && gameBoard.board[5] === "X" && gameBoard.board[8] === "X") {
      gameWon = true
      playerWon = true
      modalFunc()
    } else if (gameBoard.board[0] === "X" && gameBoard.board[4] === "X" && gameBoard.board[8] === "X") {
      gameWon = true
      playerWon = true
      modalFunc()
    } else if (gameBoard.board[2] === "X" && gameBoard.board[4] === "X" && gameBoard.board[6] === "X") {
      gameWon = true
      playerWon = true
      modalFunc()
    }
  if (gameBoard.board[0] === "O" && gameBoard.board[1]  === "O" && gameBoard.board[2]  === "O") {
    gameWon = true
    computerWon = true
    modalFunc()
  } else if (gameBoard.board[3] === "O" && gameBoard.board[4] === "O" && gameBoard.board[5] === "O") {
    gameWon = true
    computerWon = true
    modalFunc()
  } else if (gameBoard.board[6] === "O" && gameBoard.board[7] === "O" && gameBoard.board[8] === "O") {
    gameWon = true
    computerWon = true
    modalFunc()
  } else if (gameBoard.board[0] === "O" && gameBoard.board[3] === "O" && gameBoard.board[6] === "O") {
    gameWon = true
    computerWon = true
    modalFunc()
  } else if (gameBoard.board[1] === "O" && gameBoard.board[4] === "O" && gameBoard.board[7] === "O") {
    gameWon = true
    computerWon = true
    modalFunc()
  } else if (gameBoard.board[2] === "O" && gameBoard.board[5] === "O" && gameBoard.board[8] === "O") {
    gameWon = true
    computerWon = true
    modalFunc()
  } else if (gameBoard.board[0] === "O" && gameBoard.board[4] === "O" && gameBoard.board[8] === "O") {
    gameWon = true
    computerWon = true
    modalFunc()
  } else if (gameBoard.board[2] === "O" && gameBoard.board[4] === "O" && gameBoard.board[6] === "O") {
    gameWon = true
    computerWon = true
    modalFunc()
  }
  }
    
  function checkForTie() {
  if (moveCounter === 0 && gameWon === false) {
   modalFunc()
  }
  }







