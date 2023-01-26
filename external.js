//user vs computer rock-paper-scissors-begin with a function called getComputerChoice,
//this function will randomly choose between rock, paper, or scissors.
//Tip use console to ensure this is returning as expected before moving on.
//Works correctly so far.

function getComputerChoice() {
    var playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    var computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "rock";
    } else if (computerSelection === 1) {
        return "paper";
    } else {
        return "scissors";
    };
}


//Write a function that plays single round, function should take two paramters(playerSelection, computerSelection)
//returns a string that declares the winner of the round, "You Lose! Paper beats Rock!" or "You Win! Rock beats Scissors!"
//make sure playerSelection always returns lowercase letters to match function.

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === computerSelection) {
        return "Draw! Pick again!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Win! Rock beats Scissors!";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You Lose! Paper beats Rock!";
    }};
    console.log(playRound);