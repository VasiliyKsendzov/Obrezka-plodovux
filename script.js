
const button = document.querySelector("#consultation");
const buttonBottom = document.querySelector("#consultation-bottom");

function showMessage() {
  alert("Напишите мне, чтобы обсудить ваш сад");
}

if (button) {
  button.addEventListener("click", showMessage);
}

if (buttonBottom) {
  buttonBottom.addEventListener("click", showMessage);
}
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