const gameContainer = document.getElementById('game-container') as HTMLDivElement

function main(): void{
    makeBox();
}

function makeBox():void{
    const box:HTMLDivElement = document.createElement('div');
    box.className = 'box';
    box.textContent = 'X';
    gameContainer.append(box);
}

main()