document.addEventListener("DOMContentLoaded", function(){

const squares = document.querySelectorAll("#board div");
const gameState = Array(9).fill(null);
let currentTile = "X";
const winner = document.querySelector("#status");
const theWinningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let gameOver = false;
const newGame = document.querySelector(".btn");

squares.forEach(function (square, index) {
    square.classList.add("square")

    square.addEventListener("click", function(){
        if(gameOver === true){
        return;
       }
       
        if (gameState[index] !== null){
        return;
        }
            square.textContent = currentTile;
            square.classList.add(currentTile);
            gameState[index] = currentTile;
            currentTile = currentTile === "X" ? "O" : "X";

      for(let i = 0; i < theWinningCombinations.length; i++){

        let combination = theWinningCombinations[i];
        
        let a = gameState[combination[0]];
        let b = gameState[combination[1]];
        let c = gameState[combination[2]];

        if(a !== null && a === b && b === c){
            
            winner.textContent = `Congratulations! ${a} is the Winner!`;
            winner.classList.add("you-won");
            gameOver = true;
            break;
        }
    }
    });

    square.addEventListener("mouseover", function(){
        square.classList.add("hover");
    });

    square.addEventListener("mouseout", function(){
        square.classList.remove("hover");
    });
 });

    newGame.addEventListener("click", function(){
        squares.forEach(function (square, index) {
            gameState[index] = null;
            square.textContent = "";
            square.classList.remove("hover");
            square.classList.remove("X");
            square.classList.remove("O");
        });
        currentTile = "X";
        gameOver = false;
        winner.textContent = "Move your mouse over a square and click to play an X or an O.";
        winner.classList.remove("you-won");
    });
});


