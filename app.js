const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDislay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result 

document.addEventListener("click", function(event) {
    userChoice = event.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice(3)
    getResult()
}) 

function generateComputerChoice(max) {
    const randomNumber = Math.floor(Math.random() * max)
    console.log(randomNumber)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice == userChoice) {
        result = "Tie"
    }
    if (computerChoice == 'rock' && userChoice == 'paper') {
        result = "Paper covers Rock. You win!"
    }
    if (computerChoice == 'rock' && userChoice == 'scissors') {
        result = "Rock crushes Scissors. You lose!"
    }
    if (computerChoice == 'scissors' && userChoice == 'paper') {
        result = "Scissors cut Paper. You lose!"
    }
    if (computerChoice == 'scissors' && userChoice == 'rock') {
        result = "Rock crushes Scissors. You win!"
    }   
    if (computerChoice == 'paper' && userChoice == 'rock') {
        result = "Paper covers Rock. You lose!"
    }
    if (computerChoice == 'paper' && userChoice == 'scissors') {
        result = "Scissors cut Paper. You win!"
    }

    resultDislay.innerHTML = result
}



