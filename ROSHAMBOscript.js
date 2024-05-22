//odin project rock paper scissors attempt, i did mine a little different 
//but it still works.


// step 1 getting the computers choice 

function GetComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


// step 2 getting the player choice

function GetPlayerChoice() {
    let player_choice = prompt("Please enter Rock Paper or Scissors").toLowerCase()
    while (player_choice !== "rock" && player_choice !== "paper" && player_choice !== "scissors") {
        player_choice = prompt("Invalid choice. Please choose either Rock, Paper, or Scissors").toLowerCase();
    }
    return player_choice;

}




// Step 3 controlling the logic with a function containting a while loop and if statement

//ps i have genuinely no idea how the and operator here makes it act like an or operator
//i just know it works.

function playround() {

    // step 3 setting the scores to zero to use later

    let player_score = 0

    let bot_score = 0


    while (player_score < 5 && bot_score < 5) {

        //for debugging purposes 1 is rock 2 is paper and 3 is scissors
    
        let player_choice = GetPlayerChoice();
        let bot_choice = GetComputerChoice();
    
        if (player_choice === bot_choice) {
            console.log("It's a draw. No points for either side.");
            console.log(`Player score: ${player_score} Bot score: ${bot_score}`);
        } else if (
            (player_choice === "rock" && bot_choice === "scissors") ||
            (player_choice === "paper" && bot_choice === "rock") ||
            (player_choice === "scissors" && bot_choice === "paper")
        ) {
            console.log(`${player_choice} beats ${bot_choice}. 1 point for Player.`);
            player_score++;
            console.log(`Player score: ${player_score} Bot score: ${bot_score}`);
        } else {
            console.log(`${bot_choice} beats ${player_choice}. 1 point for Computer.`);
            bot_score++;
            console.log(`Player score: ${player_score} Bot score: ${bot_score}`);
        }
    }

    //displaying the victor

    if (player_score == 5) {
        console.log("CONGRATS YOU WON!")
    } else {
        console.log("Too bad COM one...")
    }

} 




//step 4 last function that runs the game.
function playGame() {
    playround();
}

//final step call the playgame function

playGame();

