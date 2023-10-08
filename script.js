// Get references to HTML elements
let board = document.getElementById("board");
let resetButton = document.getElementById("reset");
let heading = document.getElementById("heading");

// Initialize the current player as 'X'
let currentPlayer = "X";

// Function to check for a win
function win() {

  // Get the values of each cell on the board
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let d = document.getElementById("d").value;
  let e = document.getElementById("e").value;
  let f = document.getElementById("f").value;
  let g = document.getElementById("g").value;
  let h = document.getElementById("h").value;
  let i = document.getElementById("i").value;

  // Check if 'X' wins
  if (
    (a === "X" && b === "X" && c === "X") ||
    (d === "X" && e === "X" && f === "X") ||
    (g === "X" && h === "X" && i === "X") ||
    (a === "X" && d === "X" && g === "X") ||
    (b === "X" && e === "X" && h === "X") ||
    (c === "X" && f === "X" && i === "X") ||
    (a === "X" && e === "X" && i === "X") ||
    (c === "X" && e === "X" && g === "X")
  ) {

    // Display 'X wins!' and change the text color to green
    heading.innerHTML = "X wins!";
    heading.style.color = "green";
    
  }
  // Check if 'O' wins
  else if (
    (a === "O" && b === "O" && c === "O") ||
    (d === "O" && e === "O" && f === "O") ||
    (g === "O" && h === "O" && i === "O") ||
    (a === "O" && d === "O" && g === "O") ||
    (b === "O" && e === "O" && h === "O") ||
    (c === "O" && f === "O" && i === "O") ||
    (a === "O" && e === "O" && i === "O") ||
    (c === "O" && e === "O" && g === "O")
  ) {
    // Display 'O wins!' and change the text color to green

    heading.innerHTML = "O wins!";
    heading.style.color = "green";
  }
}

// Function to switch the current player between 'X' and 'O'

function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

// Event listener for when a cell on the board is clicked
board.addEventListener("click", function (event) {

  let clickedButton = event.target;

  // Check if a button was clicked and it's empty
  if (clickedButton.tagName === "BUTTON" && clickedButton.value === "") {
    
    // Update the button text with the current player ('X' or 'O')
    clickedButton.textContent = currentPlayer;
    clickedButton.value = currentPlayer;

    // Switch to the next player and check for a win
    switchPlayer();
    win();
  }
});

// Event listener for the reset button
resetButton.addEventListener("click", function () {

  // Get all buttons on the board
  let buttons = document.querySelectorAll("#board button");

  // Reset each button's value and text content
  buttons.forEach(function (button) {
    button.value = "";
    button.textContent = "";
  });

  // Reset the current player to 'X'
  currentPlayer = "X";

  // Reset the heading text and color
  heading.innerHTML = "Tic-Tac-Toe";
  heading.style.color = "black";
});
