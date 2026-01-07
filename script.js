let playerScore = 0;
let computerScore = 0;

let randomNumber = Math.floor(Math.random()*100) + 1;




function getComputerChoice (){


    if (randomNumber < 33) {
        return "rock"
    } else if (randomNumber > 66){
        return "paper"
    } else
        return "scissor"
}

console.log(randomNumber + " " + getComputerChoice())

function getHumanChoice() {
    let playerAnswerUnedited = prompt('what is your choice' )
    playerAnswer = playerAnswerUnedited.toLowerCase()

    return playerAnswer
}

function playRound(computerAnswer, humanAnswer) {

    if (humanAnswer === "paper" && computerAnswer === "rock"){
        playerScore++;
    }
    else if (humanAnswer === "rock" && computerAnswer === "paper") {
        computerScore++;
    }
    else if (humanAnswer === "rock" && computerAnswer === "scissor") {
        playerScore++;
    }
    else if (humanAnswer === "scissor" && computerAnswer === "rock") {
        computerScore++;
    }
    else if (humanAnswer === "scissor" && computerAnswer === "paper") {
        playerScore++;
    }
    else if (humanAnswer === "paper" && computerAnswer === "scissor") {
        computerScore++;
    }
    else {
        console.log("It is a draw")
    }

}



console.log(playerSelection);
console.log(computerSelection);



function playGame() {

const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();


    do {
        playRound(computerSelection, playerSelection)

    }
    while (computerScore != 0 || playerScore != 0)

    if (computerScore == 5) {
        console.log("The clanker wins")
    } 
    else if (playerScore == 5) {
        console.log("the human winds")
    }

}