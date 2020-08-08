const history = document.getElementById('history-value');
let   output = document.getElementById('output-value');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const clear = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');


const printHistory = (num) => {
    return history.textContent = num
}

const printOutput = (num) => {
    if(output.textContent === '0'){
        return output.textContent = num;
    } else {
        return output.textContent += num;
    }
}

clear.addEventListener('click', () => {
    printHistory('')
    output.textContent = '0'
});

deleteBtn.addEventListener('click', () => {
    const num = output.textContent
    if (num.length === 1) {
        output.textContent = '0';
    } else {
        output.textContent = num.substring(0, (num.length - 1));
    }
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (e.target.id === '=') {
            printHistory(output.textContent);
            let result = eval(history.textContent)
            output.textContent = result
        }else{
            printOutput(e.target.id)
        }
    });
});

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        printOutput(e.target.textContent)
    })
});
