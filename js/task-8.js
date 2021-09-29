const inputMinutes = document.querySelector('.input-task-8');
const result = document.querySelector('.answer-task-8');
result.textContent = 'Вот твое время 0:0';

inputMinutes.addEventListener('input', whatTime);

function whatTime() {
  const hours = Math.floor(inputMinutes.value / 60);
  const minutes = inputMinutes.value % 60;
  return (result.textContent = `Вот твое время ${hours}:${minutes}`);
}
