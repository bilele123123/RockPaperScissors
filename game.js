function getComputerChoice() 
{
    let min = Math.ceil(1), max = Math.floor(3);
    let choiceGenerator = Math.floor(Math.random() * (max - min + 1)) + min;

    switch (choiceGenerator)
    {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
    }
}

function playRound(playerSelection, computerSelection) 
{
    if (playerSelection === computerSelection)
    {
        return "This round is a draw... You both picked " + playerSelection + ".";
    }
    switch (playerSelection) 
    {
        case "Rock":
            if (computerSelection === "Paper")
            {
                computerPoints++;
                return "You lose! Paper beats Rock!";
            }
            else
            {
                playerPoints++;
                return "You win! Rock beats Scissors!";
            }
            break;
        case "Paper":
            if (computerSelection === "Scissors")
            {
                computerPoints++;
                return "You lose! Scissors beats Paper!";
            }
            else
            {
                playerPoints++;
                return "You win! Paper beats Rock!"
            }
            break;
        case "Scissors":
            if (computerSelection === "Rock")
            {
                computerPoints++;
                return "You lose! Rock beats Scissors!";
            }
            else
            {
                playerPoints++;
                return "You win! Scissors beats Paper!"

            }
            break;
    }

}

let playerPoints = 0, computerPoints = 0;
let roundNumber = 0;

const playerChoice = document.querySelectorAll("button");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const rounds = document.querySelector(".rounds");
const gameResult = document.querySelector(".results");
const endGame = document.querySelector(".endGame");

updateGamePoints();

function endingGame(){
    if (playerPoints >= 5) 
    {
        endGame.textContent = "Congratulations! You've beat the robot!"
    }
    else if (computerPoints >= 5)
    {
        endGame.textContent = "Oh no! You've lost to the robot!"
    }
    else
    {
        return;
    }
}

function updateGameRounds(playerChoice, getComputerChoice) {
    let newRound = document.createElement("li");
    newRound.style.listStyle = "none";
    newRound.textContent = "Round " + roundNumber + ": " + playerChoice + " vs. " + getComputerChoice;
    rounds.insertBefore(newRound, rounds.firstChild);
}

function updateGamePoints() {
    playerScore.textContent = `Player score: ${playerPoints}`;
    computerScore.textContent = `Computer score: ${computerPoints}`;
}


playerChoice.forEach((button) => {
    button.addEventListener("click", () =>  {
        if (playerPoints < 5 && computerPoints < 5)
        {
            computerOption = getComputerChoice();
            gameResult.textContent = (playRound(button.id, computerOption));
            updateGamePoints();
            endingGame();
            roundNumber++;
            updateGameRounds(button.id, computerOption);
        }
        
    })
});

