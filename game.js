let playerPoints = 0, computerPoints = 0;

function getComputerChoice (min, max) 
{
    min = Math.ceil(1), max = Math.floor(3);
    let choiceGenerator = Math.floor(Math.random() * (max - min + 1)) + min;

    if (choiceGenerator == 1)
    {
        console.log("Computer picked: Rock");
        return "rock";
    }
    else if (choiceGenerator == 2)
    {
        console.log("Computer picked: Paper");
        return "paper";
    }
    else if (choiceGenerator == 3)
    {
        console.log("Computer picked: Scissors");
        return "scissors";
    }
}

function playerChoice() 
{
    let playChoice = prompt("Rock Paper or Scissors: ");
    return playChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) 
{
    playerSelection = playerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection)
    {
        console.log("This game is a draw...");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors")
    {
        console.log("You won! Rock beats Scissors.");
        playerPoints++;
    }
    else if (playerSelection == "rock" && computerSelection == "paper")
    {
        console.log("You lost! Paper beats Rock.");
        computerPoints++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        console.log("You won! Paper beats Rock.");
        playerPoints++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        console.log("You lost! Scissors beats Paper.");
        computerPoints++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        console.log("You won! Scissors beats Paper.");
        playerPoints++;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        console.log("You lost! Rock beats Scissors.");
        computerPoints++;
    }
}

function game() 
{
    for (let i = 0; i < 5; i++)
    {
        playRound();
    }
    if (playerPoints > computerPoints)
    {
        console.log("You Won!! \nYou beat the computer by " + (playerPoints-computerPoints) + " points...");
    }
    else if (computerPoints > playerPoints)
    {
        console.log("You Lost... \nYou lost by " + (computerPoints - playerPoints) + " points...");
    }
}