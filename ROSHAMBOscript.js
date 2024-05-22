
// getting the computers choice 

function GetComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice
}


//getting the player choice

function GetPlayerChoice() {
    let player_choice = parseInt(prompt("choose either Rock(1) paper(2) scissors(3)"));
    return player_choice

}

// setting the scores to zero to use later
let player_score = 0

let bot_score = 0


//controlling the logic with a while loop

while (player_score < 5 || bot_score < 5) {
    let player_choice = GetPlayerChoice();
    let bot_choice = GetComputerChoice();

    if (player_choice == bot_choice) {
        console.log("DRAW No points for either side.")
        console.log(`Player score: ${player_score}\n Bot score: ${bot_score}`)
    }
    
    else if (player_choice == 1 && bot_choice == 2) {
        console.log("Paper beats Rock. 1 point for COM")
        bot_score ++
        console.log(`Player score: ${player_score}\n Bot score: ${bot_score}`)
    } 
    
    else if (player_choice == 1 && bot_choice == 3) {
        console.log("Rock beats Scissors. 1 point for Player")
        player_score ++
        console.log(`Player score: ${player_score}\n Bot score: ${bot_score}`)
    } 
    
    else if (player_choice == 2 && bot_choice == 1) {
        console.log("Paper beats Rock. 1 point for Player")
        player_score ++
        console.log(`Player score: ${player_score}\n Bot score: ${bot_score}`)
    } 
    
    else if (player_choice == 2 && bot_choice == 3) {
        console.log("Scissors beats Paper. 1 point for COM")
        bot_score ++
        console.log(`Player score: ${player_score}\n Bot score: ${bot_score}`)
    } 
    
    else if (player_choice == 3 && bot_choice == 1) {
        console.log("Rock beats Scissors. 1 point for COM")
        bot_score ++
        console.log(`Player score: ${player_score}\n Bot score: ${bot_score}`)
    } 
    
    else if (player_choice == 3 && bot_choice == 2) {
        console.log("Paper beats Rock. 1 point for Player")
        player_score ++
        console.log(`Player score: ${player_score}\n Bot score: ${bot_score}`)  
    } 
    
    else {
        console.log("ERROR: Enter (1) for rock, (2) for paper, (3) for scissors.")
    }        
}

//displaying the victor

if (player_score == 3) {
    console.log("CONGRATS YOU WON!")
} else {
    console.log("Too bad COM one...")
}

