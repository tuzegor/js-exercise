const number = document.querySelector('.input-task-2');
const resultButton = document.querySelector('.result-button-task-2');
const result = document.querySelector('.result-task-2');

resultButton.addEventListener('click', checkNumber);
number.addEventListener('keydown', checkNumberOnEnter);

function checkNumber() {
  const random = Math.floor(Math.random() * 10 + 1);

  if (number.value > 0 && number.value <= 10) {
    if (Number(number.value) === random) {
      result.classList.add('success');
      result.textContent = `Поздравляю ты угадал, число компьютера ${random}`;
    } else {
      result.classList.remove('success');
      result.textContent = `Ты проиграл, число компьютера ${random}`;
    }
  } else {
    result.textContent = 'Некоректное число, введи число от 1 до 10';
  }
}

function checkNumberOnEnter(e) {
  if (e.code === 'Enter') {
    checkNumber();
  }
}
