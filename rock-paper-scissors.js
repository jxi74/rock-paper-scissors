let humanScore = 0;
let computerScore = 0;

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
                    result.textContent = "Tie!";
                    break;
                case "paper":
                    result.textContent = "You Lose! Paper beats Rock!";
                    computerScore++;
                    break;
                case "scissors":
                    result.textContent = "You Win! Rock beats Scissors!";
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    result.textContent = "You Win! Paper beats Rock!";
                    humanScore++;
                    break;
                case "paper":
                    result.textContent = "Tie!";
                    break;
                case "scissors":
                    result.textContent = "You Lose! Scissors beats Paper!";
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    result.textContent = "You Lose! Rock beats Scissors!";
                    computerScore++;
                    break;
                case "paper":
                    result.textContent = "You Win! Scissors beats Paper!";
                    humanScore++;
                    break;
                case "scissors":
                    result.textContent = "Tie!";
                    break;
            }
            break;
    }
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const choice = document.querySelector("#choice");
const finalResults = document.querySelector("#finalResults");
const parentNode = document.querySelector("body");
const btnContainer = document.querySelector("#btn-container");

const playAgain = document.querySelector("#playAgain")
playAgain.addEventListener("click", () => {
    location.reload();
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        startGame();
    });
});

let humanChoice = "";
function startGame() {
    let computerChoice = getComputerChoice();
    choice.textContent = "Player choice: " + humanChoice + 
        "\nComputer choice: " + computerChoice;
    //console.log("humanChoice: ", humanChoice);
    //console.log("computerChoice: ", computerChoice);

    playRound(humanChoice, computerChoice);
    score.textContent = "humanScore: " + humanScore + "\ncomputerScore: " + computerScore;
    //console.log("humanScore: ", humanScore);
    //console.log("computerScore: ", computerScore);
    if (humanScore === 5 || computerScore === 5) {
        displayResults();
        parentNode.removeChild(btnContainer);
        playAgain.setAttribute("style", "display: block");
    }
}

function displayResults() {
    if (humanScore > computerScore) {
        finalResults.textContent = "You win!";
    }
    else if (humanScore < computerScore) {
        finalResults.textContent = "The computer wins!";
    }
    else {
        finalResults.textContent = "Tie!";
    }
}
