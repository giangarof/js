"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board = document.getElementById('game-container');
let turn = 'X';
function listenBoard() {
    board.addEventListener('click', runGame);
}
function main() {
    createBoard();
    listenBoard();
}
function runGame(e) {
    const boxId = e.target.id;
    console.log(boxId);
    if (boxId === null)
        return;
    const box = document.getElementById(`${boxId}`);
    if (box === null || box.textContent !== '')
        return;
    box.textContent = turn;
    const winner = checkWinner();
    if (!winner)
        switchPlayer();
    else {
        console.log('winner');
    }
}
function checkWinner() {
    const boxes = getBoxes();
    return ((boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] !== '') ||
        (boxes[3] === boxes[4] && boxes[4] === boxes[5] && boxes[3] !== '') ||
        (boxes[6] === boxes[7] && boxes[7] === boxes[6] && boxes[6] !== '') ||
        (boxes[0] === boxes[4] && boxes[4] === boxes[2] && boxes[0] !== '') ||
        (boxes[2] === boxes[4] && boxes[4] === boxes[2] && boxes[2] !== '') ||
        (boxes[1] === boxes[4] && boxes[4] === boxes[2] && boxes[1] !== '') ||
        (boxes[0] === boxes[3] && boxes[3] === boxes[2] && boxes[0] !== '') ||
        (boxes[2] === boxes[5] && boxes[5] === boxes[2] && boxes[2] !== ''));
}
function getBoxes() {
    const boxesContent = [];
    for (let i = 0; i < 9; i++) {
        const box = document.getElementById(`box-${i}`);
        console.log(box);
        const boxContent = box.textContent;
        if (boxContent === null) {
            boxesContent.push('');
        }
        else {
            boxesContent.push(boxContent);
        }
    }
    return boxesContent;
}
function switchPlayer() {
    if (turn === 'X') {
        turn = 'O';
    }
    else {
        turn = 'X';
    }
}
function createBoard() {
    for (let i = 0; i < 9; i++) {
        makeBox(i);
    }
}
function makeBox(i) {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box-${i}`;
    box.textContent = '';
    board.append(box);
}
main();
