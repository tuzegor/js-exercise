const firstNumber = document.querySelector('.input-1-task-6');
const secondNumber = document.querySelector('.input-2-task-6');
const thirdNumber = document.querySelector('.input-3-task-6');
// const nonCorrect = document.querySelector('.answer-task-6');
const resultButton = document.querySelector('.result-button-task-6');
const result = document.querySelector('.result-task-6');

resultButton.addEventListener('click', checkNumbers);

// function isNumber(elem, arr) {
//   if (isNaN(elem)) {
//     result.textContent = 'Есть не число';
//   } else {
//     arr.push(Number(elem));
//   }
// }

function checkNumbers(evt) {
  let numbers = [];
  if (!isNaN(firstNumber.value) && !isNaN(secondNumber.value) && !isNaN(thirdNumber.value)) {
    numbers.push(Number(firstNumber.value));
    numbers.push(Number(secondNumber.value));
    numbers.push(Number(thirdNumber.value));

    result.textContent = `${Math.max(...numbers)} -- Это самое большое число`;
  } else {
    result.textContent = 'Введите все числа';
  }
}
