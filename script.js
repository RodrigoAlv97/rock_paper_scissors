let pScore = 0;
let cScore = 0;

const container = document.querySelector("#container");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#result");
const playerScore = document.querySelector("#pScore");
const computerScore = document.querySelector("#cScore");

btnRock.addEventListener("click", () => game(computerSelection(), "Rock"));
btnPaper.addEventListener("click", () => game(computerSelection(), "Paper"));
btnScissors.addEventListener("click", () => game(computerSelection(), "Scissors")
);

btnRock.addEventListener("click", () => {
  document.getElementById("pScoreImg").src = "../images/pRock.png";
});

btnPaper.addEventListener("click", () => {
  document.getElementById("pScoreImg").src = "../images/pPaper.png";
});

btnScissors.addEventListener("click", () => {
  document.getElementById("pScoreImg").src = "../images/pScissors.png";
});

function computerSelection() {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice == 3) {
    document.getElementById("cScoreImg").src = "../images/cRock.png";
    return "Rock";
  } else if (choice == 2) {
    document.getElementById("cScoreImg").src = "../images/cPaper.png";
    return "Paper";
  } else {
    document.getElementById("cScoreImg").src = "../images/cScissors.png";
    return "Scissors";
  }
}

function game(cS, pS) {
  let result = "";
  if (pS == cS) {
    result = "Tie";
  } else if (pS == "Rock" && cS == "Scissors") {
    result = "You Win";
    pScore++;
  } else if (pS == "Paper" && cS == "Rock") {
    result = "You Win";
    pScore++;
  } else if (pS == "Scissors" && cS == "Paper") {
    result = "You Win";
    pScore++;
  } else {
    result = "You Lose";
    cScore++;
  }
  playerScore.textContent = "Player Score: " + pScore;
  computerScore.textContent = "Computer Score: " + cScore;
  roundResult.textContent = result;
  if (pScore == 5 || cScore == 5) {
    gameOver();
  }
}

function reset() {
  pScore = 0;
  cScore = 0;
  playerScore.textContent = "Player Score: " + pScore;
  computerScore.textContent = "Computer Score: " + cScore;
  document.getElementById("pScoreImg").src = "../images/default.png";
  document.getElementById("cScoreImg").src = "../images/default.png";
  roundResult.textContent = "Result";
}

function gameOver() {
  const endGame = document.createElement("div");
  endGame.setAttribute("class", "endGame");
  container.appendChild(endGame);
  const restartMsg = document.createElement("div");
  restartMsg.setAttribute("class", "restartMsg");
  endGame.appendChild(restartMsg);
  const winLose = document.createElement("p");
  if (pScore > cScore) {
    winLose.textContent = "¡You Win!";
  } else {
    winLose.textContent = "¡You Lose!";
  }
  restartMsg.appendChild(winLose);
  const playAgain = document.createElement("p");
  playAgain.textContent = "Play again?";
  restartMsg.appendChild(playAgain);
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "¡Rematch!";
  resetBtn.setAttribute("id", "resetBtn");
  restartMsg.appendChild(resetBtn);

  resetBtn.addEventListener("click", reset);
  resetBtn.addEventListener("click", () => {
    endGame.style.display = "none";
  });
}
