//user vs computer rock-paper-scissors-begin with a function called getComputerChoice,
//this function will randomly choose between rock, paper, or scissors.
//Tip use console to ensure this is returning as expected before moving on.
//Works correctly so far.

//function game() {

let playerScore = 0; 
let computerScore = 0;

const choices = document.querySelectorAll('#rps');
const results = document.querySelector('.results');
const restart = document.querySelector('#restart');
const score = document.querySelector('.score');
gameStart();
scoreUpdate();


function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return  "rock";
    } else if (computerSelection === 1) {
        return  "paper";
    } else {
        return  "scissors";
    }
}



function rps(playerSelection, computerSelection)  {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        results.textContent = `Draw! Pick again!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        scoreUpdate();
            results.textContent = `Round Won! Rock beats Scissors!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        scoreUpdate();
        results.textContent = `Round Lost! Paper beats Rock!`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        scoreUpdate();
        results.textContent = `Round Won! Paper beats Rock!`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        scoreUpdate();
        results.textContent = `Round Lost! Scissors beats Paper!`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        scoreUpdate();
        results.textContent = `Round Lost! Rock beats Scissors!`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        scoreUpdate();
        results.textContent = `Round Won! Scissors beats Paper!`;
    }


}

function gameStart() {
   playerScore = 0; 
   computerScore = 0;
   choices.forEach(computerSelection => {
    computerSelection.disabled = false;
   });
   restart.style.visibility = "hidden";
   restart.disabled = true;
   results.textContent = "";
   score.textContent = ` ${playerScore}  -  ${computerScore} `;
}

function gameEnd() {
    choices.forEach(computerSelection => {
        computerSelection.disabled = true;
    });
    restart.style.visibility = "visible";
    restart.disabled = false;
}

function scoreUpdate() {
    if (playerScore == 5) {
        score.textContent = "You've won Adventurer! +20 XP!";
        gameEnd();
    } else if (computerScore == 5) {
        score.textContent = "You've Lost! -20 Gold!";
        gameEnd();
    }else {
        score.textContent = ` ${playerScore}   -  ${computerScore} `;
    }
    }


    function playRound(playerSelection) {
        let computerSelection = getComputerChoice();
        rps(playerSelection, computerSelection)
    }

    choices.forEach(computerSelection => {
        computerSelection.addEventListener('click', () => {
            playRound(computerSelection.textContent);
        })
    });

    restart.addEventListener('click', gameStart);
   // let Winner = "";


//For easier code write a getPlayerChoice function, perhaps?
//this function will randomly choose between rock, paper, or scissors.
//correct console entries.


   // if (playerSelection === "rock") {
      //  return "rock";

   // } else if (playerSelection === "paper") {
    //    return "paper";

  //  } else if (playerSelection === "scissors") {
       // return "scissors";
  
//}
//};
//console.log(getPlayerChoice);

//Write a function that plays single round, function should take two paramters(playerSelection, computerSelection)
//returns a string that declares the winner of the round, "You Lose! Paper beats Rock!" or "You Win! Rock beats Scissors!"
//make sure playerSelection always returns lowercase letters to match function.
//having issues with variables not comparing
//function playRound(playerSelection, computerSelection)  {
 //   if (playerSelection === computerSelection) {
   //     return alert("Draw! Pick again!");
  //  } else if (playerSelection === "rock" && computerSelection === "scissors") {
   //     playerScore++;
    //    return alert("Round Won! Rock beats Scissors!");
  //  } else if (playerSelection === "rock" && computerSelection === "paper") {
    //    computerScore++;
    //    return alert("Round Lost! Paper beats Rock!");
   // } else if (playerSelection === "paper" && computerSelection === "rock") {
     //   playerScore++;
     //   return alert("Round Won! Paper beats Rock!");
 //   } else if (playerSelection === "paper" && computerSelection === "scissors") {
     //   computerScore++;
      // return alert("Round Lost! Scissors beats Paper!");
 //   } else if (playerSelection === "scissors" && computerSelection === "rock") {
   //     computerScore++;
    //    return alert("Round Lost! Rock beats Scissors!");
  //  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    //    playerScore++;
   //     return alert("Round Won! Scissors beats Paper!");
  //  }
//}





//let playerScore = parseInt(0); 
//let computerScore = parseInt(0);
//let Winner = "";

//for(var i = 0; i < 5; i++) {
//testing below - delete and replace as needed
//let playerSelection = getPlayerChoice();
//let computerSelection = getComputerChoice();
//console.log(playRound(playerSelection , computerSelection));
//console.log("your score: " + playerScore);
//console.log("computer score: " + computerScore);
//}
//add final score after 5 rounds, announce winner loser or draw
   // if (playerScore > computerScore) {
      //  Winner = "You Win! Nice Job!";
    // } else if (playerScore < computerScore) {
     //   Winner = "The Computer Wins! Better Luck Next Time!";
   //  } else if (playerScore === computerScore) {
    //    Winner = "You Tied! Play Again!";

  //   }
// alert("After 5 Intense Rounds: " + Winner);
//}
//game();