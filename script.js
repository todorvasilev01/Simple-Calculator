let total = 0;
let buffer = '0';
let previousOperation;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        getSymbol(value);
    } else {
        getNumber(value);
    }

    screen.innerText = buffer;
}

function initial() {
    document.querySelector('.calc-buttons').addEventListener('click', function (e) {
        buttonClick(e.target.innerText);
    })
}
initial();


function getSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            total = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '=':
            if (previousOperation === null || previousOperation === NaN
                || previousOperation === undefined || previousOperation == '') {
                return;
            }
            executeMathOperation(previousOperation, Number(buffer));
            previousOperation = '';
            buffer = total;
            total = 0;
            break;
        case '÷':
            handleMath(symbol);
            break;
        case 'x':
            handleMath(symbol);
            break;
        case '+':
            handleMath(symbol);
            break;
        case '-':
            handleMath(symbol);
            break;

    }
}

function getNumber(number) {
    if (buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
    }
}


function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const number = Number(buffer);
    if (total === 0) {
        total = number;
    }
    previousOperation = symbol;
    buffer = '0';

}

function executeMathOperation(previousOperation, num) {


    if (previousOperation === '+'){
        total = total + num;
        return;
    }

    if (previousOperation === '-'){
        total = total - num;
        return;
    }

    if (previousOperation === 'x'){
        total = total * num;
        return;
    }

    if(previousOperation === '÷'){
        total = total / num;
    }
    
}
    
