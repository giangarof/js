import { isNonNullExpression } from "typescript";

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

function runGame(e: Event): void{
    const boxId: string | null = (<HTMLElement>e.target).id;
    console.log(boxId)
    if( boxId === null) return;
    const box:  HTMLElement | null = document.getElementById(`${boxId}`)
    if(box === null || box.textContent !== '') return;
    box.textContent = turn;
    const winner: boolean = checkWinner();
    if(!winner) switchPlayer()
    else { console.log('winner')}

}

function checkWinner(): boolean{
    const boxes: string[] = getBoxes();
    return(
        (boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] !== '') ||
        (boxes[3] === boxes[4] && boxes[4] === boxes[5] && boxes[3] !== '') ||
        (boxes[6] === boxes[7] && boxes[7] === boxes[6] && boxes[6] !== '') ||
        (boxes[0] === boxes[4] && boxes[4] === boxes[2] && boxes[0] !== '') ||
        (boxes[2] === boxes[4] && boxes[4] === boxes[2] && boxes[2] !== '') ||
        (boxes[1] === boxes[4] && boxes[4] === boxes[2] && boxes[1] !== '') ||
        (boxes[0] === boxes[3] && boxes[3] === boxes[2] && boxes[0] !== '') ||
        (boxes[2] === boxes[5] && boxes[5] === boxes[2] && boxes[2] !== '')
    )
}

function getBoxes():string[]{
    const boxesContent: string[] = [];
    for (let i = 0; i<9; i++){
        const box = document.getElementById(`box-${i}`) as HTMLElement;
        console.log(box)
        const boxContent: string | null = box.textContent;
        if(boxContent === null){
             boxesContent.push('');
        } else{
            boxesContent.push(boxContent)
        }
    }
    return boxesContent
}

function switchPlayer(): void{
    if(turn === 'X'){
        turn = 'O'
    } else {
        turn = 'X'
    }
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