document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    let noClickCount = 0;
    const noTexts = [
        "Estas segura? 😢",
        "No te hagas la dificil...🙃",
        "Dale deci que si 🥰",
        "No te hago feliz? 🙁",
        "Posta me decis que no? 🥺",
        "Pero si me amas... 😉",
        "Re mala sos conmigo💔",
        "Por que me decis que no? 😞",
        "Voy a llorar 😭",
        "Ultima oportunidad... 💕",
        "El destino quiere que me digas que si atilia 😄",
        "No podes contra la tentacion 😏",
        "Te cagas de risa conmigo 😕",
        "Apreta el otro boton dale 🙂",
        "Dale deci que si ☹️",
        "Bueno esta bien entonces 😔"
    ];

    // Mover botón "No" aleatoriamente al hacer clic
    noBtn.addEventListener("click", function () {
        noClickCount++;

        if (noClickCount < noTexts.length) {
            noBtn.innerText = noTexts[noClickCount];
        } else {
            noBtn.innerText = "Era joda, no tenes otra opcion jajajajaja🤪";
        }

        const maxX = window.innerWidth - noBtn.clientWidth - 20;
        const maxY = window.innerHeight - noBtn.clientHeight - 20;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });

    // Asegurar que el popup esté oculto al iniciar
    popup.classList.add("hidden");

    yesBtn.addEventListener("click", function () {
        popup.classList.remove("hidden"); // Muestra el popup
        noBtn.style.display = "none"; // Oculta el botón "No"
    });

    closePopup.addEventListener("click", function () {
        popup.classList.add("hidden"); // Oculta el popup al cerrar
    });
});
