let playerScore = 0;
let computerScore = 0;


function getComputerChoice (){
    let randomNumber = Math.floor(Math.random()*100) + 1;

    if (randomNumber < 33) {
        return "rock"
    } else if (randomNumber > 66){
        return "paper"
    } else
        return "scissor"
    
}

function score(){
    console.log("Human: " + playerScore + " " + "clanker: " + computerScore);
}


function getHumanChoice() {
    let playerAnswerUnedited = prompt('what is your choice' )
    playerAnswer = playerAnswerUnedited.toLowerCase()

    return playerAnswer
}

function playRound(computerAnswer, humanAnswer) {

    if (humanAnswer === "paper" && computerAnswer === "rock"){
        playerScore++;
        score();
    }
    else if (humanAnswer === "rock" && computerAnswer === "paper") {
        computerScore++;
        score();
    }
    else if (humanAnswer === "rock" && computerAnswer === "scissor") {
        playerScore++;
        score();
    }
    else if (humanAnswer === "scissor" && computerAnswer === "rock") {
        computerScore++;
        score();
    }
    else if (humanAnswer === "scissor" && computerAnswer === "paper") {
        playerScore++;
        score();
    }
    else if (humanAnswer === "paper" && computerAnswer === "scissor") {
        computerScore++;
        score();
    }
    else {
        console.log("It is a draw")
        score();
    }

}
    
function playGame() {

while (computerScore < 5 && playerScore < 5) {
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const playerSelection = getHumanChoice();
    console.log(playerSelection)
 

    playRound(computerSelection, playerSelection);
}


if (computerScore === 5){
    console.log("the clanker wins");
}
else if (playerScore === 5){
    console.log("the human wins");
}

}

playGame()
