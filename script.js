let playerScore = 0;
let computerScore = 0;

const PlayerRock = document.querySelector("#rock");
const PlayerPaper = document.querySelector("#paper");
const PlayerScissor = document.querySelector("#scissor");
const Scoreboard = document.querySelector("#score");


const PlayerScoreboard = document.createElement("p");
PlayerScoreboard.textContent = `PlayerScore: ${playerScore}`;
Scoreboard.appendChild(PlayerScoreboard);

const ComputerScoreboard = document.createElement("p");
ComputerScoreboard.textContent = `ComputerScore: ${computerScore}`;
Scoreboard.appendChild(ComputerScoreboard);

const currentComputerChoice = document.createElement("p");

function updateComputerChoice(){
    let computerAnswerSecond = getComputerChoice();
    currentComputerChoice.textContent = `current pick: ${computerAnswerSecond}`;
    Scoreboard.appendChild(currentComputerChoice);
    return computerAnswerSecond
};

PlayerRock.addEventListener("click", function (){
    
    let ComputerAnswerFunc = currentComputerChoice.textContent.slice(14);
    console.log(ComputerAnswerFunc);

    playRound(ComputerAnswerFunc, "rock");
    PlayerScoreboard.textContent = `PlayerScore: ${playerScore}`;
    ComputerScoreboard.textContent = `ComputerScore: ${computerScore}`;
    updateComputerChoice()
})


PlayerPaper.addEventListener("click", function (){
    let ComputerAnswerFunc = currentComputerChoice.textContent.slice(14);
    console.log(ComputerAnswerFunc);

    playRound(ComputerAnswerFunc, "paper");
    PlayerScoreboard.textContent = `PlayerScore: ${playerScore}`;
    ComputerScoreboard.textContent = `ComputerScore: ${computerScore}`;
    updateComputerChoice();
})


PlayerScissor.addEventListener("click", function (){
    let ComputerAnswerFunc = currentComputerChoice.textContent.slice(14);
    console.log(ComputerAnswerFunc);

    playRound(ComputerAnswerFunc, "scissor");
    PlayerScoreboard.textContent = `PlayerScore: ${playerScore}`;
    ComputerScoreboard.textContent = `ComputerScore: ${computerScore}`;
    updateComputerChoice();
})


function winner() {
    
}




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





updateComputerChoice()