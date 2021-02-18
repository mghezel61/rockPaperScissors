// play the game until one side wins as much as given number
function game(number = 5) {
    // debugger;
   
    let comp = 0;
    let player = 0;

    
    while (true) {
        // enter a choice  by player
        const playerSelection = prompt("Please Enter your choice:");

        // choose a word randomly
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.search("win") > 0) {
            player++;
            console.log("player: " + player);
            if (player == number) {
                return "you are the winner";
            }
        }
        if(result.search("Lose") > 0) {
            comp++;
            console.log("comp:" + comp);
            if (comp == number) {
                return "you are the loser";
            }
        }

    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)
    // if the words would being equal
    if (playerSelection === computerSelection) {
        return 'tie';
    }

    // if the word won`t be equal
    if (playerSelection === "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === 'scissors') {
            return "You win! Rock beats Scissors";
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection == "rock") {
            return "You win! paper beats rock";
        } else if (computerSelection === 'scissors') {
            return "You Lose! Scissors beats Paper";
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === 'paper') {
            return "You wins! Scissors beats Paper";
        }
    }
}

// const playerSelection = prompt("Please Enter your choice:");
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// pick up a word between rock,paper and scissors ramdomly
function computerPlay() {
    arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}
let num = prompt("Please enter the number:")
let res = game(num);
console.log(res);

// let str = "you lose"

// if(str.search('lose')>0){
//     console.log('i here!')
// }


