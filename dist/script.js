"use strict";
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerrock = document.getElementById("computerrock");
const computerpaper = document.getElementById("computerpaper");
const computerscissors = document.getElementById("computerscissors");
const choiceText = document.getElementById("choiceText");
const computerThink = document.getElementById("computerThink");
const userWins = document.getElementById("userWins");
const computerWins = document.getElementById("computerWins");
const gameDraw = document.getElementById("gameDraw");
const refreshButton = document.getElementById("playAgain");
let userChoice;
let computerChoice = randomComputerChoice();
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
}
;
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
}
;
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
}
;
function randomComputerChoice() {
    const choices = [computerrock, computerpaper, computerscissors];
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
    if ((computerChoiceId === "computerrock" && userChoiceId === "paper") ||
        (computerChoiceId === "computerpaper" && userChoiceId === "scissors") ||
        (computerChoiceId === "computerscissors" && userChoiceId === "rock")) {
        if (userWins) {
            userWins.style.display = "flex";
        }
    }
    else if ((computerChoiceId === "computerrock" && userChoiceId === "scissors") ||
        (computerChoiceId === "computerpaper" && userChoiceId === "rock") ||
        (computerChoiceId === "computerscissors" && userChoiceId === "paper")) {
        if (computerWins) {
            computerWins.style.display = "flex";
        }
    }
    else {
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
});
function enableEventListeners() {
    rock === null || rock === void 0 ? void 0 : rock.addEventListener("click", choiceRock);
    paper === null || paper === void 0 ? void 0 : paper.addEventListener("click", choicePaper);
    scissors === null || scissors === void 0 ? void 0 : scissors.addEventListener("click", choiceScissors);
}
function disableEventListeners() {
    rock === null || rock === void 0 ? void 0 : rock.removeEventListener("click", choiceRock);
    paper === null || paper === void 0 ? void 0 : paper.removeEventListener("click", choicePaper);
    scissors === null || scissors === void 0 ? void 0 : scissors.removeEventListener("click", choiceScissors);
}
