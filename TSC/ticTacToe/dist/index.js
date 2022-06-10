"use strict";
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
