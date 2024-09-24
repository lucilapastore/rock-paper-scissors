function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];

  // Generate a random index between 0 and 2 (inclusive)
  const randomIndex = Math.floor(Math.random() * options.length);

  // Return the option at the random index
  return options[randomIndex];
}

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
