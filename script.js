 // Получаем элементы DOM
const clickableText = document.getElementById("clickable-text");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

// Открываем окно при клике на текст
clickableText.addEventListener("click", function() {
    popup.style.display = "flex";  // Показываем окно
});

// Закрываем окно при клике вне его области
popup.addEventListener("click", function(event) {
if (event.target === popup) {
    popup.style.display = "none";
    }
});