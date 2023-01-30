//user vs computer rock-paper-scissors-begin with a function called getComputerChoice,
//this function will randomly choose between rock, paper, or scissors.
//Tip use console to ensure this is returning as expected before moving on.
//Works correctly so far.
function game() {

function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "rock";
    } else if (computerSelection === 1) {
        return "paper";
    } else {
        return "scissors";
    };
}
console.log(getComputerChoice);
//For easier code write a getPlayerChoice function, perhaps?
//this function will randomly choose between rock, paper, or scissors.
//correct console entries.
function getPlayerChoice() {
    const playerSelection = prompt("Rock, Paper, or Scissors? Best of Five!");
    if (playerSelection.toLowerCase() === "rock") {
        return "rock";

    } else if (playerSelection.toLowerCase() === "paper") {
        return "paper";

    } else if (playerSelection.toLowerCase() === "scissors") {
        return "scissors";
  
}};
console.log(getPlayerChoice);

//Write a function that plays single round, function should take two paramters(playerSelection, computerSelection)
//returns a string that declares the winner of the round, "You Lose! Paper beats Rock!" or "You Win! Rock beats Scissors!"
//make sure playerSelection always returns lowercase letters to match function.
//having issues with variables not comparing
function playRound(playerSelection, computerSelection)  {
    if (playerSelection === computerSelection) {
        return alert("Draw! Pick again!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return alert("Round Won! Rock beats Scissors!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return alert("Round Lost! Paper beats Rock!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return alert("Round Won! Paper beats Rock!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return alert("Round Lost! Scissors beats Paper!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return alert("Round Lost! Rock beats Scissors!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return alert("Round Won! Scissors beats Paper!");
    }
}

let playerScore = parseInt(0); 
let computerScore = parseInt(0);
let Winner = "";

for(var i = 0; i < 5; i++) {
//testing below - delete and replace as needed
let playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection , computerSelection));
console.log("your score: " + playerScore);
console.log("computer score: " + computerScore);
}
//add final score after 5 rounds, announce winner loser or draw
    if (playerScore > computerScore) {
        Winner = "You Win! Nice Job!";
     } else if (playerScore < computerScore) {
        Winner = "The Computer Wins! Better Luck Next Time!";
     } else if (playerScore === computerScore) {
        Winner = "You Tied! Play Again!";

}
alert("After 5 Intense Rounds: " + Winner);
}
game();