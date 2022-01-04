const choice = document.getElementById('choice-input-task-9');
const resultBtn = document.querySelector('.result-button-task-9');
const result = document.querySelector('.result-task-9');
resultBtn.addEventListener('click', startGame);

function startGame() {
  result.classList.add('answer-task-9');

  console.dir(result);
  const random = Math.random();
  if (random < 0.33) {
    console.log('< 0,33');
    result.textContent = 'Камінь';
  } else if (random >= 0.33 && random < 0.66) {
    console.log('0,33 - 0,66');
    result.textContent = 'Ножиці';
  } else if (random >= 0.66) {
    console.log('> 0,66');
    result.textContent = 'Папір';
  }
}
