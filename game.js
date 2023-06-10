let playerPoints = 0, computerPoints = 0;
let roundNumber = 0;

const playerChoice = document.querySelectorAll("button");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const rounds = document.querySelector(".rounds");
const gameResult = document.querySelector(".results");
const endGame = document.querySelector(".endGame");
let playerChoiceIcon = document.getElementById("player-choice");
let computerChoiceIcon = document.getElementById("computer-choice");
let alert = document.getElementById("alert");
alert.style.display = "none";

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
                playerChoiceIcon.textContent = "🪨";
                computerChoiceIcon.textContent = "📄";
                return "You lose! Paper beats Rock!";
            }
            else
            {
                playerPoints++;
                playerChoiceIcon.textContent = "🪨";
                computerChoiceIcon.textContent = "✂️";
                return "You win! Rock beats Scissors!";
            }
            break;
        case "Paper":
            if (computerSelection === "Scissors")
            {
                computerPoints++;
                playerChoiceIcon.textContent = "📄";
                computerChoiceIcon.textContent = "✂️";
                return "You lose! Scissors beats Paper!";
            }
            else
            {
                playerPoints++;
                playerChoiceIcon.textContent = "📄";
                computerChoiceIcon.textContent = "🪨";
                return "You win! Paper beats Rock!"
            }
            break;
        case "Scissors":
            if (computerSelection === "Rock")
            {
                computerPoints++;
                playerChoiceIcon.textContent = "✂️";
                computerChoiceIcon.textContent = "🪨";
                return "You lose! Rock beats Scissors!";
            }
            else
            {
                playerPoints++;
                playerChoiceIcon.textContent = "✂️";
                computerChoiceIcon.textContent = "📄";
                return "You win! Scissors beats Paper!"
            }
            break;
    }

}



updateGamePoints();

function endingGame(){
    if (playerPoints >= 5) 
    {
        showAlert("Congratulations! You've beat the robot!");
    }
    else if (computerPoints >= 5)
    {
        showAlert("Oh no! You've lost to the robot!");
    }
    else
    {
        return;
    }
}

function showAlert(message) {
    let alertMessage = document.querySelector(".alert-message");
    alertMessage.textContent = message;
    let alert = document.getElementById("alert");
    alert.style.display = "flex";
    let playAgainButton = document.querySelector(".play-again");
}

function restartGame() {
    location.reload();
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

