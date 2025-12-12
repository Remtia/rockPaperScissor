const choicesArr = document.querySelector('.choices-card');
const humanRockChoice = document.querySelector('#rock-human');
const humanPaperChoice = document.querySelector('#paper-human');
const humanScissorChoice = document.querySelector('#scissors-human');
const computerRockChoice = document.querySelector('#rock-computer');
const computerPaperChoice = document.querySelector('#paper-computer');
const computerScissorChoice = document.querySelector('#scissors-computer');

let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {
  if(humanRockChoice.addEventListener('click', function(e) {
    e.target.style.transform = 'scale(1.5)'
  })) {
    return "rock";
  }
  else if(humanPaperChoice.addEventListener('click', function(e) {
    e.target.style.transform = 'scale(1.5)'
  })) {
    return "paper";
  }
  else if (humanScissorChoice.addEventListener('click', function(e) {
    e.target.style.transform = 'scale(1.5)'
  })) {
    return "scissors"
  }
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    computerRockChoice.style.transform   = 'scale(1.5)'
    return "rock";
  } else if (randomNum === 2) {
    computerRockChoice.style.transform   = 'scale(1.5)'
    return "paper";
  } else {
    computerRockChoice.style.transform   = 'scale(1.5)';
     return "scissor";
  }
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
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    console.log(`The score is ${humanScore} to ${computerScore}`);
}

playGame();
