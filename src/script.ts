const rock = document.getElementById("rock") as HTMLImageElement | null;
const paper = document.getElementById("paper") as HTMLImageElement | null;
const scissors = document.getElementById("scissors") as HTMLImageElement | null;
const computerrock = document.getElementById("computerrock") as HTMLImageElement | null;
const computerpaper = document.getElementById("computerpaper") as HTMLImageElement | null;
const computerscissors = document.getElementById("computerscissors") as HTMLImageElement | null;
const choiceText = document.getElementById("choiceText") as HTMLHeadingElement | null;
const computerThink = document.getElementById("computerThink") as HTMLHeadingElement | null;
const userWins = document.getElementById("userWins") as HTMLHeadingElement | null;
const computerWins = document.getElementById("computerWins") as HTMLHeadingElement | null;
const gameDraw = document.getElementById("gameDraw") as HTMLHeadingElement | null;
const refreshButton = document.getElementById("playAgain") as HTMLButtonElement;

let userChoice: any;
let computerChoice: any = randomComputerChoice();

enableEventListeners();

function choiceRock() {
    userChoice = rock;
    if (paper && scissors) {
        paper.style.display = "none";
        scissors.style.display = "none";
    }
    if (choiceText) {
        choiceText.style.display = "none";
    }
    if (computerThink) {
        computerThink.style.display = "flex";
    }

    setTimeout(displayComputerChoice, 200);

};

function choicePaper() {
    userChoice = paper;
    if (rock && scissors) {
        rock.style.display = "none";
        scissors.style.display = "none";
    }
    if (choiceText) {
        choiceText.style.display = "none";
    }
    if (computerThink) {
        computerThink.style.display = "flex";
    }
    setTimeout(displayComputerChoice, 1000);

};

function choiceScissors() {
    userChoice = scissors;
    if (rock && paper) {
        rock.style.display = "none";
        paper.style.display = "none";
    }
    if (choiceText) {
        choiceText.style.display = "none";
    }
    if (computerThink) {
        computerThink.style.display = "flex";
    }
    setTimeout(displayComputerChoice, 1000);

};


function randomComputerChoice() {
    const choices = [computerrock, computerpaper, computerscissors]
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function displayComputerChoice() {
    const currentComputerChoice = randomComputerChoice();
    if (currentComputerChoice) {
        currentComputerChoice.style.display = "flex";
    }
    if (computerThink) {
        computerThink.style.display = "none";
    }
    computerChoice = currentComputerChoice;
    gameWinner();
}


function gameWinner() {

    const userChoiceId = userChoice.id;
    const computerChoiceId = computerChoice.id;

    if (
        (computerChoiceId === "computerrock" && userChoiceId === "paper") ||
        (computerChoiceId === "computerpaper" && userChoiceId === "scissors") ||
        (computerChoiceId === "computerscissors" && userChoiceId === "rock")
    ) {
        if (userWins) {
            userWins.style.display = "flex";
        }
    } else if (
        (computerChoiceId === "computerrock" && userChoiceId === "scissors") ||
        (computerChoiceId === "computerpaper" && userChoiceId === "rock") ||
        (computerChoiceId === "computerscissors" && userChoiceId === "paper")
    ) {
        if (computerWins) {
            computerWins.style.display = "flex";
        }
    } else {
        if (gameDraw) {
            gameDraw.style.display = "flex";
        }
    }

    userChoice.style.display = "flex";
    computerChoice.style.display = "flex";
    userChoice = undefined;
    computerChoice = undefined;

    disableEventListeners();

    refreshButton.style.display = "flex";

}

refreshButton.addEventListener("click", () => {
    location.reload();
    enableEventListeners();
})



function enableEventListeners() {
    rock?.addEventListener("click", choiceRock);
    paper?.addEventListener("click", choicePaper);
    scissors?.addEventListener("click", choiceScissors);
}

function disableEventListeners() {
    rock?.removeEventListener("click", choiceRock);
    paper?.removeEventListener("click", choicePaper);
    scissors?.removeEventListener("click", choiceScissors);
}