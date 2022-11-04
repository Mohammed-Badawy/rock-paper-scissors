/* create an array of possible choices */
const CHOICES = ["rock", "paper", "scissors"];

console.log(game()); //play five rounds


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

// create a function to play five rounds
function game(){
    // keep scores of player and computer
    let playerScore = 0;
    let computerScore = 0;

    // play five rounds
    for(let i = 0; i < 5; i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        let roundResult = playRound(playerChoice, computerChoice);
        
        if(roundResult > 0){
            playerScore++;
        }
        else if(roundResult < 0){
            computerScore++;
        }
    }

    // decide the winner of the whole game
    if (playerScore > computerScore){
        return "Congrats! You won against the computer.";
    }
    else if(playerScore < computerScore){
        return "Computer won this game!";
    }
    else{
        return "There is a tie!";
    }

}

// create a function to prompt player for valid input
function getPlayerChoice(){
    let choice = prompt("What's your choice?");

    while(!isValid(choice)){
        choice = prompt("What's your choice?");
    }

    return choice;
}

// create fuction to make sure the validity of user input
function isValid(choice){    
    if(CHOICES.includes(choice.toLowerCase())){
        return true;
    }
    return false;
}

