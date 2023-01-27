//For easier code write a getPlayerChoice function, perhaps?
//this function will randomly choose between rock, paper, or scissors.
//correct console entries.

//RE WORK with MULTIPLE ROUNDS ** 
var playRound = function () {
    //Players Choice
    let playerSelection = prompt("Rock, Paper, or Scissors?: ");
    console.log(playerSelection);

    if (playerSelection == "rock") {
        console.log(playerSelection = 1);
    } else if (playerSelection == "paper") {
        console.log(playerSelection = 2);
    } else if (playerSelection == "scissors") {
        console.log(playerSelection == 3);

    }

    //user vs computer rock-paper-scissors-begin with a function called getComputerChoice,
    //this function will randomly choose between rock, paper, or scissors.
    //Tip use console to ensure this is returning as expected before moving on.
    //Works correctly so far.

    let computerSelection = Math.floor(Math.random() * 3) + 1;
    console.log(computerSelection);

    if (computerSelection == 1) {
        alert("Rock!");
    } else if (computerSelection == 2) {
        alert("Paper!");
    } else if (computerSelection == 3) {
        alert("Scissors!");
    }

    return {
        "playerSelection": playerSelection,
        "computerSelection": computerSelection
    };
}
//Write a function that plays single round, function should take two paramters(playerSelection, computerSelection)
//returns a string that declares the winner of the round, "You Lose! Paper beats Rock!" or "You Win! Rock beats Scissors!"
//make sure playerSelection always returns lowercase letters to match function.
//having issues with variables not comparing

//COMPARE REWORK WITH MULTIPLE ROUNDS **
function result(playerSelection, computerSelection) {
    if (computerSelection == 2 && playerSelection == 1) {
        alert("You Lose! Paper beats Rock!");
    } else if (computerSelection == 3 && playerSelection == 1) {
        alert("You Win! Rock beats Scissors!");
    } else if (computerSelection == 1 && playerSelection == 2) {
        alert("You Win! Paper beats Rock!");
    } else if (computerSelection == 1 && playerSelection == 3) {
        alert("You Lose! Rock beats Scissors!");
    } else if (computerSelection == 2 && playerSelection == 3) {
        alert("You Win! Scissors beats Paper!");
    } else if (computerSelection == 3 && playerSelection == 2) {
        alert("You Lose! Scissors beats Paper!");
    } else if (computerSelection == 2 && playerSelection == 1) {
        alert("You Win! Paper beats Rock!");
    } else if (computerSelection == playerSelection) {
        alert("Draw!");
    }
}

//Write a function that plays multiple rounds Game(), 
// Call playRound inside the function to play 5 rounds that keeps score and reports winner or loser at the end.

//ALWAYS DRAW FIXME:
function Game() {
    //ensure prompt continues to run for 5 games.
    // create game score for each round to sum up and announce winner or loser.(will need score variable)
    for (let i = 0; i <= 5; i++) {
        var opt = playRound();
        result(opt.playerSelection, opt.computerSelection);
    }
}

Game();