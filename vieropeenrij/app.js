while (!player1){
    var player1 = prompt('Speler 1: Voer je naam in. Jij bent blauw.');
}
var player1Color = 'blue';

while (!player2){
    var player2 = prompt('Speler 2: Voer je naam in. Jij bent rood.');
}
var player2Color = 'red';


// Selectors


var tableRow = document.getElementsByTagName('tr');
var tableData = document.getElementsByTagName('td');
var playerTurn = document.querySelector('.player-turn');
const slots = document.querySelectorAll('.slot');
const resetBtn = document.querySelector('.reset');

var yangblue = document.getElementById("yangblue")
var yangred = document.getElementById("yangred")
var currentPlayer = 1;
<<<<<<< HEAD
let winner;
=======
>>>>>>> main
playerTurn.textContent = `${player1} : zijn beurt`
yangred.src = "yangredgrijs.png"

// Log cell coordinates when clicked

for (i = 0; i < tableData.length; i ++){
    tableData[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
    });
<<<<<<< HEAD
};
=======
}
>>>>>>> main


// Funtions

function changeColor(e){
    // Get clicked column index
    let column = e.target.cellIndex;
    let row = [];

    for (i = 5; i > -1; i--){
<<<<<<< HEAD
        if (tableRow[i].children[column].style.backgroundColor == 'white'){
=======
        if (tableRow[i].children[column].style.backgroundColor === 'white'){
>>>>>>> main
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor = 'blue';
                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player1} WINS!!`;
                    playerTurn.style.color = player1Color;
                    return alert(`${player1} WINS!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'DRAW!';
                    return alert('DRAW!');
                }else{
                    yangred.src = "img/yang-ts-stance.gif"
                    yangblue.src = "yangbluegrijs.png"
                    playerTurn.textContent = `${player2} : zijn beurt`
                    return currentPlayer = 2;
                }
            }else{
                row[0].style.backgroundColor = 'red';
                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player2} HEEFT GEWONNEN!!!`;
                    playerTurn.style.color = player2Color;
                    return alert(`${player2} HEEFT GEWONNEN!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'GELIJKSPEL!';
<<<<<<< HEAD
                    return alert('GELIJKSPEL!');
=======
                    return alert('GELIJKSPE!');
>>>>>>> main
                }else{
                    yangred.src = "yangredgrijs.png"
                    yangblue.src = "yanblauw.gif"
                    playerTurn.textContent = `${player1} : zijn beurt`;
                    return currentPlayer = 1;
                }

            }
        }
    }

}

Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', changeColor);
    // Set all slots to white for new game.
    cell.style.backgroundColor = 'white';
});

function colorMatchCheck(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'white' && one !== undefined);
}

function horizontalCheck(){
    for (let row = 0; row < tableRow.length; row++){
        for (let col =0; col < 4; col++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor,tableRow[row].children[col+1].style.backgroundColor,
<<<<<<< HEAD
                tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)){
=======
                tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor )){
>>>>>>> main
                return true;
            }
        }
    }
}

function verticalCheck(){
    for (let col = 0; col < 8; col++){
        for (let row = 0; row < 3; row++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor,
                tableRow[row+2].children[col].style.backgroundColor,tableRow[row+3].children[col].style.backgroundColor)){
                return true;
<<<<<<< HEAD
            };
=======
            }
>>>>>>> main
        }
    }
}

function diagonalCheck(){
    for(let col = 0; col < 4; col++){
        for (let row = 0; row < 3; row++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor,
                tableRow[row+2].children[col+2].style.backgroundColor,tableRow[row+3].children[col+3].style.backgroundColor)){
                return true;
            }
        }
    }

}

function diagonalCheck2(){
    for(let col = 0; col < 4; col++){
        for (let row = 5; row > 2; row--){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor,
                tableRow[row-2].children[col+2].style.backgroundColor,tableRow[row-3].children[col+3].style.backgroundColor)){
                return true;
            }
        }
    }
}

function drawCheck(){
    let fullSlot = []
    for (i=0; i < tableData.length; i++){
        if (tableData[i].style.backgroundColor !== 'white'){
            fullSlot.push(tableData[i]);
        }
    }
    if (fullSlot.length === tableData.length){
        return true;
    }
}

resetBtn.addEventListener('click', () => {
    slots.forEach(slot => {
        slot.style.backgroundColor = 'white';
    });
    playerTurn.style.color = 'black';
    return (currentPlayer === 1 ? playerTurn.textContent = `${player1} : zijn beurt` : playerTurn.textContent = `${player2} : zijn beurt`);
});