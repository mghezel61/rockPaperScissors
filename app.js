// targetting the elements
const playerChoices = document.querySelectorAll('.player-button');
const computerChoices = document.querySelectorAll('.computer-button');
const playerChoice = document.getElementById('player');
const computerChoice = document.getElementById('computer');
const result = document.getElementById('result');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const computerScoreSmallWidth = document.getElementById('computer-score-smallWidth');

const playAgain = document.getElementById('play-again');
const finalResult = document.querySelector('.f-r');
// player
const playerSide = document.querySelectorAll(".player-choices, .player-choice, .player, .plr-score ");

// computer
const computerSide = document.querySelectorAll('.computer-choices, .computer-choice, .computer, .comp-score');


// player and computer score
let comp = 0;
let pl = 0;

playerChoices.forEach(function (item) {
    item.addEventListener('click', function (e) {
        // remove the background-color of selected computer choice
        removeSelectedClassByComputer();

        // check if the game is finished
        if (pl == 5 || comp == 5) {
            return
        }

        // replace the playerChoice with chosen one by player
        let player = e.currentTarget.textContent;
        playerChoice.value = player;

        // play the computer 
        let computer = computerPlay();
        computer = computer.toLowerCase();

        // add the selected class as computer choice
        computerChoices.forEach(element => {
            if (element.classList.contains(computer)) {
                element.classList.add('selected');
            }
        });

        // replace the computerChoice with the chosen one by computer
        computerChoice.value = computer;

        // play the game
        let res = playRound(player, computer);
        result.value = res;

        if (res.search("win") > 0) {
            pl++;
            playerScore.value = pl;
            if (pl == 5) {
                removeSelectedClassByComputer();
                
                // determine the winer and loser sides
                addColors(playerSide,"winer");
                addColors(computerSide,"loser");
                finalResult.textContent = "you are the winner";
                return;
            }
        }
        if (res.search("lose") > 0) {
            comp++;
            computerScore.value = comp;
            computerScoreSmallWidth.value = comp;
            if (comp == 5) {
                let add = [1,2,3];
                add.forEach(element => {
                   console.log(element); 
                });
                removeSelectedClassByComputer();
                // determine the winer and loser sides
                addColors(playerSide,"loser")
                addColors(computerSide,"winer")
                finalResult.textContent = "you are the loser";
                return;
            }
        }
    })
});

// play again the game
playAgain.addEventListener('click', function () {
    // reseting the all values
    pl = comp = playerScore.value = computerScore.value =computerScoreSmallWidth.value= 0;
    computerChoice.value = result.value = playerChoice.value = "??????"
    finalResult.textContent = " we are waiting for the final results!";
    removeSelectedClassByComputer();
    removeColors(playerSide, "winer");
    removeColors(playerSide, "loser");
    removeColors(computerSide, "winer");
    removeColors(computerSide, "loser");
})



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // if the words would being equal
    if (playerSelection === computerSelection) {
        return 'tie';
    }
    // if the word won`t be equal
    if (playerSelection === "rock") {
        if (computerSelection == "paper") {
            return "You lose!";
        } else if (computerSelection === 'scissors') {
            return "You win!";
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection == "rock") {
            return "You win!";
        } else if (computerSelection === 'scissors') {
            return "You lose!";
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection == "rock") {
            return "You lose!";
        } else if (computerSelection === 'paper') {
            return "You win!";
        }
    }
}

/* 
    pick up a word between rock,paper and scissors ramdomly 
*/
function computerPlay() {
    arr = ['Rock', 'Paper', 'Scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

// play the game until one side wins as much as given number
function game(number = 5) {
    let comp = 0;
    let player = 0;
    while (true) {
        // enter  by player
        const playerSelection = prompt("Please Enter your choice:");
        // select 
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
        if (result.search("Lose") > 0) {
            comp++;
            console.log("comp:" + comp);
            if (comp == number) {
                return "you are the loser";
            }
        }

    }
}
// reset the the background color of computer buttons
function removeSelectedClassByComputer() {
    computerChoices.forEach(element => {
        if (element.classList.contains('selected')) {
            element.classList.remove('selected');
        }
    });
}
// change the colors of winner and loser side
function addColors(array, color){
    array.forEach(element => {
        element.classList.add(color);
    });
}

// change the colors of winner and loser side
function removeColors(array, color){
    array.forEach(element => {
        element.classList.remove(color);
    });
}
