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
    // player wins  = 1;  tie = 0; computer wins = -1;
    let playerWin = null; 

    // retun lowercase choice
    playerSelection = playerSelection.toLowerCase();

    // paper <==> rock  ===> paper (player won)
    if(playerSelection === "paper" && computerSelection === "rock"){
        playerWin = 1;
    }
    // rock <==> scissors ===> rock (player won)
    else if(playerSelection === "rock" && computerSelection === "scissors"){
       playerWin = 1;
    }
    // scissors <==> paper scissors (player won)
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerWin = 1;
    }
    // playerSelection === computerSelection ===> (tie)
    else if(playerSelection === computerSelection){
        playerWin = 0;
    }
    // else (computer won)
    else {
        playerWin = -1;
    }

    console.log(roundWinner(playerWin, playerSelection, computerSelection));
    return playerWin;

}

// create function returns string to announce the winner of the round
function roundWinner(winner, player, computer){
    switch(winner){
        case 1:
            return `You Won this round! ${player} beats ${computer}`;
            break;
        
        case -1:
            return `You lose this round! ${computer} beats ${player}`;
            break;
        
        default:
            return `There is a tie`;
    }
}

const playerChoice = "PAper";
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));