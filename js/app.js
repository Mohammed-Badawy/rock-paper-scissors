/* create an array of possible choices */
const CHOICES = ["rock", "paper", "scissors"];


/* create function to let computer chooses random valid choice */
function getComputerChoice(){
    let randNum = Math.floor(Math.random()* 3); // choose random number between 0 - 2
    
    let choice = CHOICES[randNum];
    return choice;
}

/* create fuction to play one round against the computer */
function playRound(playerSelection, computerSelection){

    // retun lowercase choice
    playerSelection = playerSelection.toLowerCase();

    // paper <==> rock  ===> paper (player won)
    if(playerSelection === "paper" && computerSelection === "rock"){
        return `You Won this round! ${playerSelection} beats ${computerSelection}`;
    }
    // rock <==> scissors ===> rock (player won)
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return `You Won this round! ${playerSelection} beats ${computerSelection}`;
    }
    // scissors <==> paper scissors (player won)
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return `You Won this round! ${playerSelection} beats ${computerSelection}`;
    }
    // playerSelection === computerSelection ===> (tie)
    else if(playerSelection === computerSelection){
        return `There is a tie`;
    }
    // else (computer won)
    else {
        return `You lose this round! ${computerSelection} beats ${playerSelection}`
    }


}

const playerChoice = "PAper";
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));