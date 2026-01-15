let choices = document.querySelectorAll('.choice');
let userChoice;
let userScore = 0;
let computerScore = 0;
const userScoreElement = document.querySelector('#no1');
const computerScoreElement = document.querySelector('#no2');
let playyourmovebutton = document.querySelector('#msg');

function getComputerChoice() {

    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = options[randomNumber];

    return computerChoice;
}
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute('data-choice');
        console.log("User choice=" + userChoice);

        playGame();


    })
})
function playGame() {
    const computerChoice = getComputerChoice();

    console.log("Computer choice=" + computerChoice);
    if (userChoice == computerChoice) {
        console.log("It's a tie!");
        alert("It's a tie!");

    }
    else if (userChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock crushes Scissor");
        alert("You win! Rock crushes Scissor");
        userScore++;
        userScoreElement.textContent = userScore;
    }
    else if (userChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper covers Rock");
        alert("You win! Paper covers Rock");
        userScore++;
        userScoreElement.textContent = userScore;

    }
    else if (userChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! Scissor cuts Paper");
        alert("You win! Scissor cuts Paper");
        userScore++;
        userScoreElement.textContent = userScore;

    }
    else {
        console.log("You lose!");
        alert("You lose!");
        computerScore++;
        computerScoreElement.textContent = computerScore;

    }
}
function playyourmove() {
    if (!userChoice) {
        alert("Please make your move!");
        return;
    }
    playGame();
    userChoice = null;
}


playyourmovebutton.addEventListener("click", playyourmove);




