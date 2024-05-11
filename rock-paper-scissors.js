let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let pick = prompt("Welcome to Rock, Paper, Scissors. Type 1 for Rock, Type 2 for Paper, Type 3 for Scissors");
    let choice;
    switch(pick){
        case "1":
            choice = "rock";
            break;
        case "2":
            choice = "paper";
            break;
        case "3":
            choice = "scissors";
            break;
        default:
            alert("You picked an invalid choice.");
            location.reload();
    }
    return choice;
}

function getComputerChoice() {
    let rndm = Math.random();
    let choice;
    if (rndm >= 0 && rndm <= .33) {
        choice = "rock";
    }
    else if (rndm > .33 && rndm <= .66) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    alert("Tie!");
                    break;
                case "paper":
                    alert("You Lose! Paper beats Rock!");
                    computerScore++;
                    break;
                case "scissors":
                    alert("You Win! Rock beats Scissors!");
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    alert("You Win! Paper beats Rock!");
                    humanScore++;
                    break;
                case "paper":
                    alert("Tie!");
                    break;
                case "scissors":
                    alert("You Lose! Scissors beats Paper!");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    alert("You Lose! Rock beats Scissors!");
                    computerScore++;
                    break;
                case "paper":
                    alert("You Win! Scissors beats Paper!");
                    humanScore++;
                    break;
                case "scissors":
                    alert("Tie!");
                    break;
            }
            break;
    }
}

for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log("humanChoice: ", humanChoice);
    console.log("computerChoice: ", computerChoice);

    playRound(humanChoice, computerChoice);
    alert("humanScore: " + humanScore + "\ncomputerScore: " + computerScore);
    console.log("humanScore: ", humanScore);
    console.log("computerScore: ", computerScore);
}

if (humanScore > computerScore) {
    alert("You win!");
}
else if (humanScore < computerScore) {
    alert("The computer wins!");
}
else {
    alert("Tie!");
}
