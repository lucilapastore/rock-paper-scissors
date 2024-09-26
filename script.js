function main() {
  // Constants declarations
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.getElementById("options-container");

  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  const resetGameBtn = document.getElementById("reset-game-btn");

  let playerScore = 0;
  let computerScore = 0;

  const MAX_GAMES = 3;
  const GAME_OPTIONS = {
    ROCK: "Rock 🪨",
    PAPER: "Paper 📄",
    SCISSORS: "Scissors ✂️",
  };

  const GAME_OUTCOMES = [
    {
      winner: GAME_OPTIONS.ROCK,
      looser: GAME_OPTIONS.SCISSORS,
      verb: "Crushes",
    },
    {
      winner: GAME_OPTIONS.PAPER,
      looser: GAME_OPTIONS.ROCK,
      verb: "Wraps",
    },
    {
      winner: GAME_OPTIONS.SCISSORS,
      looser: GAME_OPTIONS.PAPER,
      verb: "Cut",
    },
  ];

  // Event Listeners
  resetGameBtn.addEventListener("click", resetGame);

  rockBtn.addEventListener("click", function () {
    showResults(GAME_OPTIONS.ROCK);
  });

  paperBtn.addEventListener("click", function () {
    showResults(GAME_OPTIONS.PAPER);
  });

  scissorsBtn.addEventListener("click", function () {
    showResults(GAME_OPTIONS.SCISSORS);
  });

  // Functions
  function getRandomComputerOption() {
    const options = [
      GAME_OPTIONS.ROCK,
      GAME_OPTIONS.PAPER,
      GAME_OPTIONS.SCISSORS,
    ];

    // Generate a random index between 0 and 2 (inclusive)
    const randomIndex = Math.floor(Math.random() * options.length);

    // Return the option at the random index
    return options[randomIndex];
  }

  //   function hasPlayerWonTheRound(player, computer) {
  //     return (
  //       (player === GAME_OPTIONS.ROCK && computer === GAME_OPTIONS.SCISSORS) ||
  //       (player === GAME_OPTIONS.SCISSORS && computer === GAME_OPTIONS.PAPER) ||
  //       (player === GAME_OPTIONS.PAPER && computer === GAME_OPTIONS.ROCK)
  //     );
  //   }

  function calculateOutcome(player1Option, player2Option) {
    const player1WinnerOutcome = GAME_OUTCOMES.find(
      (g) => g.winner === player1Option
    );

    if (player1WinnerOutcome.looser === player2Option) {
      return player1WinnerOutcome;
    }

    const player2WinnerOutcome = GAME_OUTCOMES.find(
      (g) => g.winner === player2Option
    );

    return player2WinnerOutcome;
  }

  function generateWinnerMessage(winnerName, winnerOption, looserOption, verb) {
    return `${winnerName} wins! ${winnerOption} ${verb} ${looserOption}`;
  }

  function getRoundResults(userOption) {
    const computerOption = getRandomComputerOption();

    if (computerOption === userOption)
      return `It's a tie! Both chose ${userOption}`;

    // const isPlayerWinner = hasPlayerWonTheRound(userOption, computerOption);
    const gameOutcome = calculateOutcome(userOption, computerOption);

    if (gameOutcome.winner === userOption) {
      playerScore += 1;
      return generateWinnerMessage(
        "Player",
        userOption,
        computerOption,
        gameOutcome.verb
      );
    }

    computerScore += 1;
    return generateWinnerMessage(
      "Computer",
      computerOption,
      userOption,
      gameOutcome.verb
    );
  }

  function closeMatchWithWinnerMessage(winnerName) {
    winnerMsgElement.innerText = `${winnerName} has won the game!`;
    resetGameBtn.style.display = "block"; // Show reset button
    optionsContainer.style.display = "none"; // Hide options
  }

  function displayScores() {
    // Update the scores displayed in the elements
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
  }

  function isWinnerScore(score) {
    return score === MAX_GAMES;
  }

  function showResults(userOption) {
    // Get the result message from getRoundResults
    roundResultsMsg.innerText = getRoundResults(userOption);

    displayScores();

    const matchFinished =
      isWinnerScore(playerScore) || isWinnerScore(computerScore);

    if (!matchFinished) return;

    const winnerName = isWinnerScore(playerScore) ? "Player" : "Computer";
    closeMatchWithWinnerMessage(winnerName);
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
}

document.addEventListener("DOMContentLoaded", function () {
  main();
});
