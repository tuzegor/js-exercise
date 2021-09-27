const date = document.querySelector('.input-task-1');
const resultButton = document.querySelector('.result-button-task-1');
const result = document.querySelector('.result-task-1');

resultButton.addEventListener('click', checkDate);
date.addEventListener('keydown', checkDateOnEnter);
function checkDate() {
  if (!isNaN(date.value)) {
    if (date.value % 4 === 0) {
      result.classList.add('success');
      result.textContent = `Тебе повезло. ${date.value} - Это высокосный год`;
    } else {
      result.classList.remove('success');
      result.textContent = `${date.value} - Это не высокосный год`;
    }
  } else {
    result.classList.remove('success');
    result.textContent = `${date.value} - Это не дата рождения`;
  }
}

function checkDateOnEnter(event) {
  if (event.code === 'Enter') {
    checkDate();
  }
}
