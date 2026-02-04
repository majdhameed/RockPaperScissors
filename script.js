function getComputerChoice(){
    //Randomly generate number between 1 and 99
    let randomInt = Math.floor(Math.random()*99+1)
    if (randomInt <= 33) {
        return 0
    }else if(randomInt <= 66){
        return 1
    }else{
        return 2
    }
}

// function getHumanChoice(){
//     let response = prompt("Enter rock, paper, or scissors")

//     if (response.toLowerCase() === "rock"){
//         return 0
//     }else if (response.toLowerCase() === "paper"){
//         return 1
//     }else if (response.toLowerCase() === "scissors"){
//         return 2
//     }
// }

function playRound(humanChoice, computerChoice){
    console.log(humanChoice, computerChoice)
   if(humanChoice === computerChoice){
    return 0;
    //RPS is a cyclic game so we can test it via (a+1)%3 = b
   }else if((humanChoice + 1)%3 != computerChoice){
    return 1;
   }else{
    return 2
   }
}


function game(playerChoice){
    let roundsPlayed = 0;

    let result;
    let message;
    computerChoice = getComputerChoice();

    result = playRound(playerChoice, computerChoice)

    if (result === 0){
        message = `Round was a tie!
        You both chose ${translation[playerChoice]}.`
    }else if (result === 1){
        humanScore += 1;
        message = `You won the round!
        ${translation[playerChoice]} beats ${translation[computerChoice]}`
    }else{
        computerScore += 1;
        message = `Computer won the round!
        ${translation[computerChoice]} beats ${translation[playerChoice]}`
    }

    event.textContent = message
    playerScoreTracker.textContent = `Your score: ${humanScore}`
    computerScoreTracker.textContent = `Computer score: ${computerScore}`
    
    console.log(message)

    if (humanScore === pointsToWin){
        alert("You won the game!")
    }

    if (computerScore === pointsToWin){
        alert("Computer Won the game!")
    }

    
}

const buttons = document.querySelectorAll("button");
console.log(buttons)

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    game(parseInt(button.getAttribute("data-move")))
  });
});


event = document.querySelector(".event")
playerScoreTracker = document.querySelector(".playerScore");
console.log(playerScoreTracker)
computerScoreTracker = document.querySelector(".computerScore")
console.log(computerScoreTracker)

humanScore = 0
computerScore = 0
pointsToWin=5;

const translation = {
    0: "rock",
    1: "paper",
    2: "scissors"
}
