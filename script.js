function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Posición aleatoria en el ancho de la pantalla
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generar corazones cada 300ms
setInterval(createHeart, 300);