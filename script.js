// Получаем элементы
const modal = document.getElementById('consultationModal');
const buttonTop = document.getElementById('consultation');
const buttonBottom = document.getElementById('consultation-bottom');
const closeButton = document.querySelector('.close-button');

// Функция открытия окна
function openModal() {
    if (modal) modal.style.display = 'block';
}

// Открываем окно с любой из кнопок (если они есть)
if (buttonTop) {
    buttonTop.addEventListener('click', openModal);
}

if (buttonBottom) {
    buttonBottom.addEventListener('click', openModal);
}

// Закрываем окно при нажатии на крестик
if (closeButton) {
    closeButton.addEventListener('click', () => {
        if (modal) modal.style.display = 'none';
    });
}

// Закрываем окно при клике вне его области
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ===== КАЛЬКУЛЯТОР СТОИМОСТИ =====
const calcBtn = document.querySelector("#calcBtn");
const serviceType = document.querySelector("#serviceType");
const quantity = document.querySelector("#quantity");
const calcResult = document.querySelector("#calcResult");

if (calcBtn) {
  calcBtn.addEventListener("click", function () {
    const price = Number(serviceType.value);
    const qty = Number(quantity.value);

    if (qty < 1 || isNaN(qty)) {
      calcResult.textContent = "Введите количество больше 0.";
      return;
    }

    const total = price * qty;
    calcResult.textContent = "Предварительная стоимость: " + total + " BYN";
  });
}