const options = ["Rock", "Paper", "Scissors"];
//Randomly generate Rock, Paper, or Scissors.
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

//function checks to see who wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw"
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {

        return "Computer selected Scissors. You win! rock beats scissors!";

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {

        return "Computer selected Paper. You lose! paper beats rock!";

    }  else if (playerSelection === "Paper" && computerSelection === "Rock") {

        return "Computer selected Rock. You win! paper beats rock!";

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {

        return "Computer selected Scissors. You lose! scissors beats paper";

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {

        return "Computer selected Rock. You lose! rock beats scissors";

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {

        return "Computer selected Paper. You win! scissors beats paper";
    }
}

const playerSelection = prompt("please choose between Rock, Paper, or Scissors");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
