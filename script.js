let playerScore = 0;
let computerScore = 0;

const PlayerRock = document.querySelector("#rock");
const PlayerPaper = document.querySelector("#paper");
const PlayerScissor = document.querySelector("#scissor");
const Scoreboard = document.querySelector("#score")


const PlayerScoreboard = document.createElement("p")
PlayerScoreboard.textContent = `PlayerScore: ${playerScore}`
Scoreboard.appendChild(PlayerScoreboard)





PlayerRock.addEventListener("click", function (){
    let computerAnswer = getComputerChoice()
    console.log(computerAnswer)
    playRound(computerAnswer, "rock")
    
    PlayerScoreboard.textContent = `PlayerScore: ${playerScore}`
})

PlayerPaper.addEventListener("click", function (){
    let computerAnswer = getComputerChoice()
    console.log(computerAnswer)
    playRound(computerAnswer, "paper")
    
    PlayerScoreboard.textContent = `PlayerScore: ${playerScore}`
})

PlayerScissor.addEventListener("click", function (){
    let computerAnswer = getComputerChoice()
    console.log(computerAnswer)
    playRound(computerAnswer, "scissor")
    
    PlayerScoreboard.textContent = `PlayerScore: ${playerScore}`
})






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





