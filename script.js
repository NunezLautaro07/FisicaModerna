
    
    // Funcionalidad del modo oscuro
    const Luna = document.querySelector(".fa-moon");
    Luna.addEventListener("click", () => {
        const html = document.querySelector("html");
        html.dataset.bsTheme = html.dataset.bsTheme === "dark" ? "light" : "dark";
    });

    // Controlar la reproducción/pausa del audio
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const audioId = button.getAttribute('data-id');
            const audio = document.getElementById(audioId);

            if (audio.paused) {
                audio.play();
                button.classList.remove('fa-circle-play');
                button.classList.add('fa-pause');
            } else {
                audio.pause();
                button.classList.remove('fa-pause');
                button.classList.add('fa-circle-play');
            }
        });
    });

