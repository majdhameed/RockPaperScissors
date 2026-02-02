function getComputerChoice(){
    let randomInt = Math.floor(Math.random()*99+1)
    if (randomInt <= 33) {
        return 0
    }else if(randomInt <= 66){
        return 1
    }else{
        return 2
    }
}

function getHumanChoice(){
    let response = prompt("Enter rock, paper, or scissors")

    if (response.toLowerCase() === "rock"){
        return 0
    }else if (response.toLowerCase() === "paper"){
        return 1
    }else if (response.toLowerCase() === "scissors"){
        return 2
    }
}

function round(humanChoice, computerChoice){
   if(humanChoice === computerChoice){
    return 0;
   }else if((humanChoice + 1)%3 != computerChoice){
    return 1;
   }else{
    return 2
   }
}


humanScore = 0
computerScore = 0

const translation = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

function game(rounds){
    let roundsPlayed = 0;

    let result;
    let message;
    let threshold = Math.ceil(rounds/2)
    while (roundsPlayed < rounds){
        computerChoice = getComputerChoice()
        playerChoice = getHumanChoice()

        result = round(playerChoice, computerChoice)

        if (result === 0){
            message = `Round was a tie!
            You both chose ${translation[playerChoice]}.
            Current scores:
            Your score: ${humanScore}
            Computer Score: ${computerScore}`
        }else if (result === 1){
            humanScore += 1;
            message = `You won the round!
            ${translation[playerChoice]} beats ${translation[computerChoice]}
            Current scores:
            Your score: ${humanScore}
            Computer Score: ${computerScore}`
            roundsPlayed+=1
        }else{
            computerScore += 1;
            message = `Computer won the round!
            ${translation[computerChoice]} beats ${translation[playerChoice]}
            Current scores:
            Your score: ${humanScore}
            Computer Score: ${computerScore}`
            roundsPlayed +=1
        }
        
        console.log(message)
        if (humanScore === threshold){
            console.log("You have won the game!")
            break
        }else if (computerScore === threshold){
            console.log("Computer has won the game!")
            break
        }

    }
}


game(5)