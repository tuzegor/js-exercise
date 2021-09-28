// (1 °C × 9 / 5) + 32 =
const celsius = document.querySelector('.celsius-input-task-4');
const fahrenheit = document.querySelector('.fahrenheit-input-task-4');
const clearBtn = document.querySelector('.clear-button-task-4');

celsius.addEventListener('input', convertСelsius => {
  if (!isNaN(celsius.value)) {
    fahrenheit.value = (Number(celsius.value) * 9) / 5 + 32;
  } else {
    fahrenheit.value = 'Вы ввели не цифры';
  }
});
fahrenheit.addEventListener('input', convertFahrenheit => {
  if (!isNaN(fahrenheit.value)) {
    celsius.value = (Number(fahrenheit.value) * 9) / 5 + 32;
  } else {
    celsius.value = 'Вы ввели не цифры';
  }
});

clearBtn.addEventListener('click', getClear => {
  celsius.value = '';
  fahrenheit.value = '';
});
