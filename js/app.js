/* create an array of possible choices */
const CHOICES = ["rock", "paper", "scissors"];

// add an object sontaining classes
const classes = {
    subContainer: "sub-container",
    subTitle: "subtitle",
    stratButton: "start-btn",
    playerWon: "player-won",
    computerWon: "computer-won",
};

// add some references to documents elements
const initialContainer = document.querySelector(".initial-container");
const gameContainer = document.querySelector(".game-container");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const playerchoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const result = document.querySelector(".result");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

let plScore = 0;
let comScore = 0;

// play game steps
displayMessage("Would you like to play a game?", "Start Game");

// add eventlistener to get player choice
rockBtn.addEventListener("click", game);
paperBtn.addEventListener("click", game);
scissorsBtn.addEventListener("click", game);

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
function game(e){
    let roundResult = null;
    let plchoice = e.srcElement.value;
    let comChoice = getComputerChoice();

    // Check if players score less than 5
    if(plScore < 5 && comScore < 5){
        playerchoice.textContent = drawShape(plchoice);
        computerChoice.textContent = drawShape(comChoice);

        //play around and get the result
        roundResult = playRound(plchoice, comChoice);

        // check who is the winner of the round and update score
        if(roundResult > 0){
            plScore++;
            result.textContent = roundWinner(roundResult, plchoice, comChoice);
            playerScore.textContent = plScore;
        }
        else if(roundResult < 0){
            comScore++;
            result.textContent = roundWinner(roundResult, plchoice, comChoice);
            computerScore.textContent = comScore;
        }
        else{
            result.textContent = roundWinner(roundResult, plchoice, comChoice);
        }

        // check if there is a winner of the whole game
        if(plScore === 5){
            declareWinner("player");
        }
        else if(comScore === 5){
            declareWinner("computer");
        }
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

// display startup messages
function displayMessage(msg, btnText){

    gameContainer.style.visibility = "hidden";

    const tmpDiv = document.createElement("div");
    const message = document.createElement("h2");
    const stratBtn = document.createElement("button");

    tmpDiv.className = classes.subContainer;

    message.className = classes.subTitle;
    message.textContent = msg;

    stratBtn.className = classes.stratButton;
    stratBtn.textContent = btnText;

    tmpDiv.appendChild(message);
    tmpDiv.appendChild(stratBtn);

    initialContainer.appendChild(tmpDiv);

    stratBtn.addEventListener("click", startGame);
}


// add function to initialize the game interface
function startGame(){
    gameContainer.style.visibility = "visible";
    initialContainer.removeChild(initialContainer.firstElementChild);
}

// draw shapes
function drawShape(choice){
    switch (choice){
        case "rock": 
            return "✊";
            break;
        case "paper":
            return "✋";
            break;
        case "scissors":
            return "✌";
            break;
    }
}

// declare winner
function declareWinner(winner){
    gameContainer.style.visibility = "hidden";
    
    const tmpDiv = document.createElement("div");
    const message = document.createElement("h2");
    const startBtn = document.createElement("button");

    tmpDiv.className = classes.subContainer;

    if(winner === "player"){
    message.className = classes.playerWon;
    message.textContent = "You Won the game";
    }
    else{
    message.className = classes.computerWon;
    message.textContent = "Sorry, it's not your lucky day!"
    }

    startBtn.className = classes.stratButton;
    startBtn.textContent = "New Game";

    tmpDiv.appendChild(message);
    tmpDiv.appendChild(startBtn);

    initialContainer.appendChild(tmpDiv);
    initialContainer.style.visibility = "visible";

    startBtn.addEventListener("click", startNewGame); 
}

function startNewGame(){
    plScore = 0;
    comScore = 0;
    playerchoice.textContent = "?";
    computerChoice.textContent = "?";
    playerScore.textContent = plScore;
    computerScore.textContent = comScore;
    result.textContent = "result";
    gameContainer.style.visibility = "visible";
    initialContainer.removeChild(initialContainer.firstElementChild);
}