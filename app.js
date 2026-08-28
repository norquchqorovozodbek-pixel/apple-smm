const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();

  const user = tg.initDataUnsafe?.user;

  if (user) {
    document.getElementById("username").textContent =
      `Xush kelibsiz, ${user.first_name}!`;
  }
}

const topup = document.getElementById("topup");

topup.addEventListener("click", () => {
  alert("Balans to'ldirish funksiyasi keyingi bosqichda qo'shiladi.");
});

const services = document.querySelectorAll(".service-btn");

services.forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;

    alert(`${service} xizmati tanlandi`);

    if (tg) {
      tg.HapticFeedback?.impactOccurred("light");
    }
  });
});