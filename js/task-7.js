const userGrade = document.querySelector('.input-task-7');
const result = document.querySelector('.answer-task-7');

userGrade.addEventListener('input', conversion);
function conversion(evt) {
  if (evt.target.value > 0 && evt.target.value < 20) {
    result.textContent = 'Твоя оценка - F';
  } else if (evt.target.value >= 20 && evt.target.value <= 44) {
    result.textContent = 'Твоя оценка - E';
  } else if (evt.target.value >= 45 && evt.target.value <= 59) {
    result.textContent = 'Твоя оценка - D';
  } else if (evt.target.value >= 60 && evt.target.value <= 74) {
    result.textContent = 'Твоя оценка - C';
  } else if (evt.target.value >= 75 && evt.target.value <= 88) {
    result.textContent = 'Твоя оценка - B';
  } else if (evt.target.value >= 89 && evt.target.value <= 100) {
    result.textContent = 'Твоя оценка - A - ТЫ КРАСАВЧИК!!!';
  } else {
    result.textContent = 'Не коректная оценка';
  }
}
