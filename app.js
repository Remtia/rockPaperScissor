const humanRockChoice = document.querySelector("#rock-human");
const humanPaperChoice = document.querySelector("#paper-human");
const humanScissorsChoice = document.querySelector("#scissors-human");
const computerRockChoice = document.querySelector("#rock-computer");
const computerPaperChoice = document.querySelector("#paper-computer");
const computerScissorsChoice = document.querySelector("#scissors-computer");
const humanScoreElement = document.querySelector(".human-score");
const computerScoreElement = document.querySelector(".computer-score");
const resultAnnouncement = document.querySelector(".result");
const humanChoices = document.querySelectorAll(".human-choice");
const computerChoices = document.querySelectorAll(".computer-choice");
const gameOverElement = document.createElement('div')
const body = document.querySelector('main')

// gameOverElement.classList.add('game-over');
// gameOverElement.style.position = 'absolute';
// gameOverElement.style.zIndex = '10';
// gameOverElement.style.backgroundColor = '#1d006b';
// gameOverElement.style.Width = '30vw';
// gameOverElement.style.Height = '30vh'

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    computerRockChoice.style.transform = "scale(1.3)";
    return "rock";
  } else if (randomNum === 2) {
    computerPaperChoice.style.transform = "scale(1.3)";
    return "paper";
  } else {
    computerScissorsChoice.style.transform = "scale(1.3)";
    return "scissors";
  }
}

humanRockChoice.addEventListener("click", (e) => {
  handleHumanChoice("rock", e.currentTarget);
});
humanPaperChoice.addEventListener("click", (e) => {
  handleHumanChoice("paper", e.currentTarget);
});
humanScissorsChoice.addEventListener("click", (e) => {
  handleHumanChoice("scissors", e.currentTarget);
});

function resetScale() {
  humanChoices.forEach((one) => {
    one.style.transform = "scale(1)";
  });
  computerChoices.forEach((one) => {
    one.style.transform = "scale(1)";
  });
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultAnnouncement.innerText = "This round is tie.";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultAnnouncement.innerText = "You won this round!";
    return humanScore++;
  } else {resultAnnouncement.innerText = "You lost this round :(";
    return computerScore++;
  }
}

function handleHumanChoice(choice, humanCard) {
    resetScale();
    humanCard.style.transform = "scale(1.3)";
    const computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
    computerScoreElement.innerText = `Computer: ${computerScore}`
    humanScoreElement.innerText = `You: ${humanScore}`
    if(humanScore >= 5) {
      resultAnnouncement.innerText = "Congrats!!! You beat the computer! Restart the game.";
    } else if (computerScore >= 5) {
      resultAnnouncement.innerText = "The computer won, nice game, try again.";
    }

}
 