//user vs computer rock-paper-scissors-begin with a function called getComputerChoice,
//this function will randomly choose between rock, paper, or scissors.
//Tip use console to ensure this is returning as expected before moving on.
//Works correctly so far.

function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "rock";
    } else if (computerSelection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
//For easier code write a getPlayerChoice function, perhaps?
//this function will randomly choose between rock, paper, or scissors.
//correct console entries.
function getPlayerChoice() {
    var playerSelection = prompt("Rock, Paper, or Scissors?");
    if (playerSelection.toLowerCase() === "rock") {
        return "rock";

    } else if (playerSelection.toLowerCase() === "paper") {
        return "paper";

    } else if (playerSelection.toLowerCase() === "scissors") {
        return "scissors";

    }
}

//Write a function that plays single round, function should take two paramters(playerSelection, computerSelection)
//returns a string that declares the winner of the round, "You Lose! Paper beats Rock!" or "You Win! Rock beats Scissors!"
//make sure playerSelection always returns lowercase letters to match function.
//having issues with variables not comparing
function playRound(playerSelection, computerSelection) {



    if (playerSelection === computerSelection) {
        return "Draw! Pick again!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper!";
    }
}
console.log(playRound(getPlayerChoice(), getComputerChoice()));
//Write a function that plays multiple rounds Game(), 
// Call playRound inside the function to play 5 rounds that keeps score and reports winner or loser at the end.

function Game() {
    //ensure prompt continues to run for 5 games.
    // create game score for each round to sum up and announce winner or loser.(will need score variable)
    var score = 0;
    for (var i = 0; i < 5; i++) {
        var playerSelection = prompt("Rock, Paper, or Scissors?");
        var computerSelection = getComputerChoice();

    }}