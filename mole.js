let curr;
let currPlanTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
};

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (curr) {
        curr.innerHTML = ""; 
    }

    let mole = document.createElement("img"); 
    mole.src = "monty-mole.png";

    let num = getRandomTile();
    if (currPlanTile && currPlanTile.id === num) {
        return;
    }
    
    curr = document.getElementById(num);
    curr.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlanTile) {
        currPlanTile.innerHTML = ""; 
    }

    let plant = document.createElement("img"); 
    plant.src = "piranha-plant.png";

    let num = getRandomTile(); 
    if (curr && curr.id === num) { 
        return;
    }

    currPlanTile = document.getElementById(num); 
    currPlanTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this === curr) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); 
    } else if (this === currPlanTile) {
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver = true;
    }
}
