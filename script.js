 const clickableText = document.getElementById("clickable-text");
        const popup = document.getElementById("popup");
        const closeBtn = document.getElementById("close-btn");

        clickableText.addEventListener("click", () => {
            popup.classList.add("show");
        });

        closeBtn.addEventListener("click", () => {
            popup.classList.remove("show");
        });

        popup.addEventListener("click", (event) => {
            if (event.target === popup) {
                popup.classList.remove("show");
            }
        });