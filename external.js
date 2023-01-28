
// Determines computer choice and randomizes selection
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}

//Runs the game
function game() {
    let roundsPlayed = 0;
    let playerScore = 0;
    let computerScore = 0;
    let rpsChamp = "";

    // loop game for 5 rounds. Track rounds and score
    for (i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice().toLowerCase();
        const playerSelection = prompt("Choose Your Weapon", "Rock, Paper, Scissors").toLowerCase();
        // console.log(playerSelection)
        // console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Win Totals " + playerScore);
        console.log("Computer Win Totals " + computerScore);

        // Plays round to determine winner
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return `It's a Tie, You both picked ${playerSelection}`;
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore++
                return "The Computer Wins! Paper beats Rock";
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore++
                return "The Computer Wins! Scissors beats Paper";
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore++
                return "The Computer Wins! Rock beats Scissors";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++
                return "Nice! You Win! Rock beats Scissors";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++
                return "Nice! You Win! Paper beats Rock";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++
                return "Nice! You Win! Scissors beats Paper";
            }
        }
    }
    // determine winner of 5 round game  
    if (playerScore > computerScore) {
        rpsChamp = "Winner! You beat the Computer!";
    } else if (playerScore === computerScore) {
        rpsChamp = "You tied with the Computer. Try Again!"
    } else {
        rpsChamp = "Loser! You lost to the Computer"
    }

    // Reports who won the game  
    alert("After Five Rounds, The Winner is: " + rpsChamp);
}

// Starts the game
game();