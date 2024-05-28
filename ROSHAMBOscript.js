// Get references to the buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Get references to the display and score divs and victory div
const displayDiv = document.getElementById('display');
const scoreDiv = document.getElementById('score');
const victoryDiv = document.getElementById('victory');

// Variables to store scores
let playerScore = 0;
let botScore = 0;

// Function to get the computer's choice


function GetComputerChoice() {

    //for debugging purposes 1 is rock 2 is paper and 3 is scissors

    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to handle a round of the game
function playRound(playerChoice) {
    const botChoice = GetComputerChoice();

    if (playerChoice === botChoice) {
        displayDiv.textContent = "It's a draw. No points for either side.";
    } else if (
        (playerChoice === 'rock' && botChoice === 'scissors') ||
        (playerChoice === 'paper' && botChoice === 'rock') ||
        (playerChoice === 'scissors' && botChoice === 'paper')
    ) {
        displayDiv.textContent = `${playerChoice} beats ${botChoice}. 1 point for Player.`;
        playerScore++;
    } else {
        displayDiv.textContent = `${botChoice} beats ${playerChoice}. 1 point for Computer.`;
        botScore++;
    }

    // Update score display
    scoreDiv.textContent = `Player score: ${playerScore} Bot score: ${botScore}`;

    // Check for victory
    if (playerScore === 5) {
        victoryDiv.textContent = "Congrats! You won!";
    } else if (botScore === 5) {
        victoryDiv.textContent = "Too bad COM won....";
    } else {
        victoryDiv.textContent = "game in progress!"
    }
}

// Event listeners for player choice buttons
rockButton.addEventListener('click', function() {
    if (playerScore < 5 && botScore < 5) {
        playRound('rock');
    }
});

paperButton.addEventListener('click', function() {
    if (playerScore < 5 && botScore < 5) {
        playRound('paper');
    }
});

scissorsButton.addEventListener('click', function() {
    if (playerScore < 5 && botScore < 5) {
        playRound('scissors');
    }
});
