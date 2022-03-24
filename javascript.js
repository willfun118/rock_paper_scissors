
//convert the human random case input into capitalize First letter + Lowercase others

let humanText = "";
let humanInput = "";

function HumanInputShow() {
    humanInput = prompt("Enter Rock / Paper / Scissors", "");

    function capFirstLowOthers(string) {
        let low = string.toLowerCase();
        let cap = low.charAt(0).toUpperCase();
        humanText = cap + low.slice(1);  //return "Rock/Paper/Scissors"
        if (humanText !== "Rock"||"Paper"||"Scissors") {
            humanInput
        }
        else{
            console.log(`   You: ${humanText}`);
        }
  
    }
    capFirstLowOthers(humanInput);    

}





//Random a shape to Computer
let computerNum = 0;
let computerText = "";

function randComputer() {
    computerNum = Math.floor(Math.random() * 3 + 1);

    if (computerNum == 1) {
        computerText = "Rock"; //return "Rock"
    }
    else if (computerNum == 2) {
        computerText = "Paper"; //return "Paper"
    }
    else {
        computerText = "Scissors"; //return "Scissors"
    }
    console.log(`   Computer: ${computerText}`);
}



//Compare computer vs human
let computerScore = 0;
let humanScore = 0;

function comPare() {
    if (computerText === humanText) {
        console.log(`   **Draw Round**`);
    }
    else if (computerText === "Rock" && humanText === "Scissors") {
        console.log(`   **You lose, Rock beats Scisssors**`);
        computerScore += 1;

    }
    else if (computerText === "Paper" && humanText === "Rock") {
        console.log(`   **You lose, Paper beats Rock**`);
        computerScore += 1;

    }
    else if (computerText === "Scissors" && humanText === "paper") {
        console.log(`   **You lose, Scissors beats Paper**`);
        computerScore += 1;

    }
    else if (humanText === "Rock" && computerText === "Scissors") {
        console.log(`   **You Win, Rock beats Scisssors**`);
        humanScore += 1;

    }
    else if (humanText === "Paper" && computerText === "Rock") {
        console.log(`   **You Win, Paper beats Rock**`);
        humanScore += 1;

    }
    else if (humanText === "Scissors" && computerText === "paper") {
        console.log(`   **You Win, Scissors beats Paper**`);
        humanScore += 1;

    }
}



function PlayRound() {
    HumanInputShow();
    randComputer();
    comPare();
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1} of 5`);
        PlayRound();

        // your code here!
        //At this point you should be using console.log() to display the results of each round and the winner at the end.
    }

    if (humanScore > computerScore) {
        console.log(`Result: You (${humanScore}) vs Computer (${computerScore})`);
        console.log(`You are the final winner!`);
    }
    else if (humanScore < computerScore) {
        console.log(`Result: You (${humanScore}) vs Computer (${computerScore})`);
        console.log(`You lose this game... Refresh to play again!`);
    }
    else{
        console.log(`Result: You (${humanScore}) vs Computer (${computerScore})`);
        console.log("Draw game! Refresh to play again!")
    }
}

game();










//computer’s play, that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
//Tip: use the console to make sure this is returning the expected output before moving to the next step!
// function computerPlay() {

// };

//Write a function that plays a single round of Rock Paper Scissors.
//The function should take two parameters - the playerSelection and computerSelection 
//return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive 
//return the result

// function playRound(playerSelection, computerSelection) {
//     // your code here!
// }
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));





//Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//use loops
// function game() {
//     for (let i = 0; i < 5; i++) {
//         // your code here!
//         //At this point you should be using console.log() to display the results of each round and the winner at the end.
//      }
// };


//Use prompt() to get input from the user
