"use strict";
const gameContainer = document.getElementById('game-container');
function main() {
    makeBox();
}
function makeBox() {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = 'X';
    gameContainer.append(box);
}
main();
