const refs = {
    firstNumber: document.querySelector('.input-1-task-3'),
    secondNumber: document.querySelector('.input-2-task-3'),
    mathTools: document.querySelector('.math-tools-list'),
    plusBtn: document.querySelector('.plus-button-task-3'),
    minusBtn: document.querySelector('.minus-button-task-3'),
    multiplyBtn: document.querySelector('.multiply-button-task-3'),
    divideBtn: document.querySelector('.divide-button-task-3'),
    result: document.querySelector('.result-task-3'),
}

refs.mathTools.addEventListener('click', getOperation)

function getOperation (e){
    if (!isNaN(refs.firstNumber.value) && !isNaN(refs.secondNumber.value)) {
        if (e.target.classList.contains('plus-button-task-3')) {
            console.log('+');
    
            refs.result.textContent = Number(refs.firstNumber.value) + Number(refs.secondNumber.value)
        }
        if (e.target.classList.contains('minus-button-task-3')) {
            console.log('-');
            refs.result.textContent = Number(refs.firstNumber.value) - Number(refs.secondNumber.value)
        }
        if (e.target.classList.contains('multiply-button-task-3')) {
            console.log('*');
            refs.result.textContent = Number(refs.firstNumber.value) * Number(refs.secondNumber.value)
        }
        if (e.target.classList.contains('divide-button-task-3')) {
            console.log('/');
            refs.result.textContent = Number(refs.firstNumber.value) / Number(refs.secondNumber.value)
        }
       
        
    } else{
        refs.result.textContent ="Ты ввел не число" 
    }
    
    




}
