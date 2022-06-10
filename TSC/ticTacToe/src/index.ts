const board = document.getElementById('game-container') as HTMLDivElement
type Turn = 'X' | 'O' | ''
let turn : Turn = 'X'


function listenBoard(): void{
    board.addEventListener('click', runGame)
}

function main(): void{
    createBoard();
    listenBoard()
}

function runGame(e: Event):void{
    const boxId: string | null = (<HTMLElement>e.target).id;
    console.log(boxId)
    if( boxId === null) return;
    const box:  HTMLElement | null = document.getElementById(`${boxId}`)
    if(box === null || box.textContent !== '') return
    box.textContent = turn



}

function createBoard():void{
    for(let i = 0; i < 9; i++){
        makeBox(i)
    }
}

function makeBox(i:number):void{
    const box:HTMLDivElement = document.createElement('div');
    box.className = 'box';
    box.id = `box-${i}`;
    box.textContent = '';
    board.append(box);
}

main()