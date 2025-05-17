document.addEventListener("DOMContentLoaded", () => {
    const clickableTexts = document.querySelectorAll(".clickable-text");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");
    const popupTitle = document.getElementById("popup-title");
    const popupContent = document.getElementById("popup-content");

    clickableTexts.forEach(text => {
        text.addEventListener("click", () => {
            popupTitle.textContent = text.getAttribute("data-title");
            popupContent.textContent = text.getAttribute("data-content");
            popup.classList.add("show");
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.remove("show");
        }
    });
});