const userText = document.querySelector('.input-task-5');
const answer = document.querySelector('.answer-task-5');
answer.textContent = 'Введите число';
userText.addEventListener('input', check);

function check(evt) {
  let numb = evt.target.value;

  if (numb >= 15 && numb <= 90) {
    userText.classList.add('change-color');
    return (answer.textContent = `${numb} -- Входит`);
  }
  userText.classList.remove('change-color');
  answer.textContent = `${numb} -- Не входит. Попробуй другое`;
}
