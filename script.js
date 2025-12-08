let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else return "scissor";
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissor?");
  return choice.toLowerCase().trim();
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    return console.log(
      `It's a tie, you chose ${humanSelection}, and computer also chose ${computerSelection} .`
    );
  } else if (
    (humanSelection === "rock" && computerSelection === "scissor") ||
    (humanSelection === "scissor" && computerSelection === "paper")
  ) {
    humanScore++;
    return console.log(
      `You won! You chose ${humanSelection}, and computer chose ${computerSelection}, the score is ${humanScore}.`
    );
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    return console.log(
      `You won! You chose ${humanSelection}, and computer chose ${computerSelection}.`
    );
  } else {
    computerScore++;
    return console.log(
      `You lost. You chose ${humanSelection}, and computer chose ${computerSelection}.`
    );
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    console.log(`The score is ${humanScore} to ${computerScore}`);
  }
}

playGame();
