function Game() {


    //computer input 1-3 points for comparison with user for rounds
    function getComputerChoice() {
        const computerSelection = Math.floor(Math.random() * 3) + 1;
        if (computerSelection === 1) {
            return "rock";
        } else if (computerSelection === 2) {
            return "paper";
        } else if (computerSelection === 3) {
            return "scissors";
        }
    };
    //For easier code write a getPlayerChoice function, perhaps?
    //this function will randomly choose between rock, paper, or scissors.
    //correct console entries.
    function getPlayerChoice() {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        if (playerSelection.toLowerCase() === "rock") {
            return "rock";

        } else if (playerSelection.toLowerCase() === "paper") {
            return "paper";

        } else if (playerSelection.toLowerCase() === "scissors") {
            return "scissors";

        }
    };

    //Write a function that plays single round, function should take two paramters(playerSelection, computerSelection)
    //returns a string that declares the winner of the round, "You Lose! Paper beats Rock!" or "You Win! Rock beats Scissors!"
    //make sure playerSelection always returns lowercase letters to match function.
    //having issues with variables not comparing
    function playRound(computerSelection, playerSelection); {
        for (let i = 0; i <= 5; i++) {

        const playerScore = 0;
        const computerScore = 0;

            if (playerSelection === computerSelection) {
                return "Draw! Pick again!";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                return alert("You Win! Rock beats Scissors!");
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore++;
                return alert("You Lose! Paper beats Rock!");
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++;
                return alert("You Win! Paper beats Rock!");
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore++;
                return alert("You Lose! Scissors beats Paper!");
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore++;
                return alert("You Lose! Rock beats Scissors!");
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++;
                return alert("You Win! Scissors beats Paper!");
            }
        };

        //Write a function that plays multiple rounds Game(), 
        // Call playRound inside the function to play 5 rounds that keeps score and reports winner or loser at the end.

        //ensure prompt continues to run for 5 games.
        // create game ranking for each round to sum up

        function winGame() {
            if (playerScore > computerScore) {
                return alert("You Win!");
                } else if (playerScore < computerScore) {
                return alert("You Lose!");
                } else if (playerScore === computerScore) {
                return alert("Draw!");

                }
            }
        }
    }
Game();