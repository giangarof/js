"use strict";
const gameContainer = document.getElementById('game-container');
function main() {
    createBoard();
}
function createBoard() {
    for (let i = 0; i < 9; i++)
        makeBox(i);
}
function makeBox(i) {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box-${i}`;
    box.textContent = 'X';
    gameContainer.append(box);
}
main();
