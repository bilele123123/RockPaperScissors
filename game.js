function getComputerChoice () 
{
    let choiceGenerator = Math.floor(Math.random() * 3);

    if (choiceGenerator == 0)
    {
        console.log("Computer picked: Rock");
        return "rock";
    }
    else if (choiceGenerator == 1)
    {
        console.log("Computer picked: Paper");
        return "paper";
    }
    else if (choiceGenerator == 2)
    {
        console.log("Computer picked: Scissors");
        return "scissors";
    }
}

function playerChoice() 
{
    return prompt("Rock, Paper, Scissors: ");
}

function playRound(playerSelection, computerSelection) 
{
    playerSelection = playerChoice().toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection == "rock")
    {
        if (computerSelection == "rock")
        {
            console.log("The game is a draw!")
        }
        else if (computerSelection == "paper")
        {
            console.log("You Lose! Paper beats Rock.")
        }
        else
        {
            console.log("You Win! Rock beats Scissors.")
        }
    }

    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            console.log("You Win! Paper beats Rock.")
        }
        else if (computerSelection == "paper")
        {
            console.log("This game is a draw!")
        }
        else
        {
            console.log("You Lose! Scissors beat Paper.")
        }
    }

    else
    {
        if (computerSelection == "rock")
        {
            console.log("You Lose! Rock beats Scissors")
        }
        else if (computerSelection == "paper")
        {
            console.log("You Win! Scissors Beats Paper")
        }
        else
        {
            console.log("This game is a draw!")
        }
    }
}

function game() 
{
    for (let i = 0; i < 3; i++)
    {
        playRound(playerChoice().toLowerCase(), getComputerChoice());
    }
}