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

const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);



function playGame() {

    const roundplayerScore = playerScore;
    const roundcomputerScore = computerScore;

    do {
        playRound(computerSelection, playerSelection)

    }
    while (roundcomputerScore != 0 || roundplayerScore != 0)

    if (roundcomputerScore == 5) {
        console.log("The clanker wins")
    } 
    else if (roundplayerScore == 5) {
        console.log("the human winds")
    }

}