function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];

  // Generate a random index between 0 and 2 (inclusive)
  const randomIndex = Math.floor(Math.random() * options.length);

  // Return the option at the random index
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  // Check winning conditions
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    return true; // Player wins
  }

  return false; // Player loses or ties
}
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  // Check if the player wins
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1;
    return `Player wins! ${userOption} beats ${computerResult} `;
  } // Check for a tie
  else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption} `;
  } // If neither condition is met, the computer wins
  else {
    computerScore += 1;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption) {
  // Get the result message from getRoundResults

  roundResultsMsg.innerText = getRoundResults(userOption);

  // Update the scores displayed in the elements
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
}

// Check for a winner
if (playerScore === 3) {
  winnerMsgElement.innerText = "Player has won the game!";
  resetGameBtn.style.display = "block"; // Show reset button
  optionsContainer.style.display = "none"; // Hide options
} else if (computerScore === 3) {
  winnerMsgElement.innerText = "Computer has won the game!";
  resetGameBtn.style.display = "block"; // Show reset button
  optionsContainer.style.display = "none"; // Hide options
}
function resetGame() {
  // Reset player and computer scores to 0
  playerScore = 0;
  computerScore = 0;

  // Update the displayed scores
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  // Hide the reset button and show options for a new game
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";

  // Clear any messages from previous games
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
