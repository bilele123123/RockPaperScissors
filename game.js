function getComputerChoice () {
    const min = 1, max = 3;
    let choiceGenerator = Math.floor(Math.random() * (max - min + 1)) + min;
    let choice = "";
    if (choiceGenerator == 1)
    {
        choice = "Rock";
        return choice;
    }
    else if (choiceGenerator == 2)
    {
        choice = "Paper";
        return choice;
    }
    else if (choiceGenerator == 3)
    {
        choice = "Scissors";
        return choice;
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = "Rock";
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) 
    {
        return "The game is a draw!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper")
    {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors")
    {
        return "You Won! " + playerSelection + " beats " + computerSelection; 
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock")
    {
        return "You Won! " + playerSelection + " beats " + computerSelection; 
    }
}

function game() {

}