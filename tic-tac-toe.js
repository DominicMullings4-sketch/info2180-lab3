document.addEventListener("DOMContentLoaded", function(){

const squares = document.querySelectorAll("#board div")
const gameState = Array(9).fill(null);
let currentTile = "X";

squares.forEach(function (square, index) {
    square.classList.add("square")

    square.addEventListener("click", function(){
       if (gameState[index] !== null){
        return;
        }
            square.textContent = currentTile;
            square.classList.add(currentTile);
            gameState[index] = currentTile;
            currentTile = currentTile === "X" ? "O" : "X";
    });
 });

});


