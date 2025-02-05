document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game-container");
    const message = document.getElementById("message");
    const winMessage = document.getElementById("win-message");
    const restartButton = document.getElementById("restart");
    const timerElement = document.getElementById("time");

    let timeLeft = 30; // Segundos
    let heartsFound = 0;
    const totalHearts = 20; // Ahora hay más corazones

    // Función para crear corazones
    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        // Posición aleatoria dentro del contenedor
        const x = Math.random() * (gameContainer.clientWidth - 30);
        const y = Math.random() * (gameContainer.clientHeight - 30);
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        heart.addEventListener("click", () => {
            heart.remove();
            heartsFound++;
            if (heartsFound === totalHearts) {
                message.classList.remove("hidden");
                winMessage.classList.remove("hidden"); // Muestra la imagen y el mensaje
                restartButton.classList.remove("hidden");
                clearInterval(timer);
            }
        });

        gameContainer.appendChild(heart);
    }

    // Iniciar juego
    function startGame() {
        message.classList.add("hidden");
        winMessage.classList.add("hidden");
        restartButton.classList.add("hidden");
        gameContainer.innerHTML = "";
        heartsFound = 0;
        timeLeft = 30;
        timerElement.textContent = timeLeft;

        // Crear corazones
        for (let i = 0; i < totalHearts; i++) {
            createHeart();
        }

        // Iniciar temporizador
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(timer);
                alert("¡Se acabó el tiempo! Inténtalo de nuevo.");
                restartButton.classList.remove("hidden");
            }
        }, 1000);
    }

    restartButton.addEventListener("click", startGame);

    // Iniciar el juego al cargar la página
    startGame();
});
