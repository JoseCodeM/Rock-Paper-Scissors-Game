const options = ["Rock", "Paper", "Scissors"];
//Randomly generate Rock, Paper, or Scissors.
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

//function checks to see who wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Computer selected Scissors. You win! rock beats scissors!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Computer selected Paper. You lose! paper beats rock!";
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Computer selected Rock. It's a DRAW";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Computer selected Rock. You win! paper beats rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "Computer selected Paper. It's a DRAW";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Computer selected Scissors. You lose! scissors beats paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Computer selected Rock. You lose! rock beats scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Computer selected Paper. You win! scissors beats paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "Computer selected Scissors. It's a DRAW";
    }
}

const playerSelection = prompt("please choose between Rock, Paper, or Scissors");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));