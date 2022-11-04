/* create an array of possible choices */
const CHOICES = ["rock", "paper", "scissors"];


/* create function to let computer chooses random valid choice */
function getComputerChoice(){
    let randNum = Math.floor(Math.random()* 3); // choose random number between 0 - 2
    
    let choice = CHOICES[randNum];
    return choice;
}

console.log(getComputerChoice());