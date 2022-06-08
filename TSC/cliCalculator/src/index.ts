import {question} from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main(): void{
    const firstString: string = question('Enter first number:\n');
    const operator: string = question('Enter operator:\n');
    const secondString: string = question('Enter second number\n')
    //const firstNum = isNumber(firstString);
    //const op = isOperator(operator);
    const input: boolean = isNumber(firstString) && isOperator(operator) && isNumber(secondString); 
    
    if(input){
        //console.log('is valid')
        const firstNum: number = parseInt(firstString);
        const secondNum: number = parseInt(secondString);
        const result = calculate(firstNum, operator as Operator, secondNum)
        console.log(result)
    } else{
        console.log('Invalid input\n');
        main()
    }
};

function calculate(firstNum:number, operator:Operator, secondNum:number){
    switch(operator){
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}

function isOperator(operator:string): boolean{
    switch(operator){
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
            default: return false;
    }
}

function isNumber(str:string): boolean{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

main()