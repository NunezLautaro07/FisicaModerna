document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad del modo oscuro
    const Luna = document.querySelector(".fa-moon");
    Luna.addEventListener("click", () => {
      const html = document.querySelector("html");
      html.dataset.bsTheme = html.dataset.bsTheme === "dark" ? "light" : "dark";
    });
  
    // Array de objetos para los podcasts
    const podcasts = [
      {
        titulo: "Teorias cientificas",
        descripcion:
          "Una teoría científica se refiere a una idea y estructura bien desarrollada que nace a partir de evidencia experimental. Permite predecir resultados de nuevos experimentos.",
        imagen: "Teorias cientificas.jpg",
        pdf: "Teorias cientificas.pdf",
        audio: "Teorias cientificas.ogg",
        audioId: "audio-1",
      },
      {
        titulo: "Simetria",
        descripcion:
          "Las simetrias en Física son fundamentales pues trae aparejada una cantidad conservada. La ley de conservación de la energía es una consecuencia de una simetria.",
        imagen: "Simetria.jpeg",
        pdf: "Simetria.pdf",
        audio: "Simetria.ogg",
        audioId: "audio-2",
      },
      {
        titulo: "Relatividad Especial y Relatividad General",
        descripcion:
          "Las teorías de Relatividad Especial (1905) y Relatividad General (1915) fueron creadas por Albert Einstein. La Relatividad Especial unifica la Mecánica Clásica con el Electromagnetismo. La Relatividad General son aplicadas a todo el universo.",
        imagen: "Relatividad Especial y Relatividad General.jpeg",
        pdf: "Relatividad Especial y Relatividad General.pdf",
        audio: "Relatividad Especial y Relatividad General.ogg",
        audioId: "audio-3",
      },
      {
        titulo: "Agujeros Negros",
        descripcion:
          "Un agujero negro es una región del espacio cuya masa produce una fuerza gravitatoria tan fuerte que nada, ni la luz, puede escapar de él.",
        imagen: "Agujeros Negros.jpg",
        pdf: "Agujeros Negros.pdf",
        audio: "Agujeros Negros.ogg",
        audioId: "audio-4",
      },
      {
        titulo: "Lentes Gravitacionales",
        descripcion:
          "Las lentes gravitacionales es un fenómeno formado cuando la luz que procede de objetos lejanos y brillantes se curvan alrededor de un objeto de gran tamaño, el cual está ubicado entre el emisor y receptor.",
        imagen: "lentes gravitacionales.jpeg",
        pdf: "Lentes GravitacionalesR.pdf",
        audio: "lentes gravitacionales.ogg",
        audioId: "audio-5",
      },
      {
        titulo: "Naturaleza de la Luz",
        descripcion:
          "La naturaleza de la Luz es dual: puede ser considerada como una onda o corpusculo dependiendo del fenómeno que se pretende estudiar.",
        imagen: "Naturaleza de la Luz.jpeg",
        pdf: "Naturaleza de la Luz.pdf",
        audio: "Naturaleza de la Luz.ogg",
        audioId: "audio-6",
      },
      {
        titulo: "Física Cuántica",
        descripcion:
          "La fisica Cuantica estudia la naturaleza en escala atómica o subatomica. En otras palabras, estudia el mundo de lo pequeño, de moléculas, átomos y sus componentes.",
        imagen: "Física Cuántica.jpeg",
        pdf: "Física Cuántica.pdf",
        audio: "Física Cuántica.ogg",
        audioId: "audio-7",
      },
      {
        titulo: "Espín del electrón",
        descripcion: "El Espín es una propiedad intrínseca de la materia.",
        imagen: "Espín del electrón.png",
        pdf: "Espín del electrón.pdf",
        audio: "Espín del electrón.ogg",
        audioId: "audio-8",
      },
      {
        titulo: "Muones",
        descripcion:
          "Los muones son particulas elementales, con carga negativa y su masa es 207 veces mayor que el elctrón, inestable con una vida media de 2,2 microsegundos. Permiten verificar la Relatividad Especial.",
        imagen: "Muones.jpeg",
        pdf: "Muones.pdf",
        audio: "Muones.ogg",
        audioId: "audio-9",
      },
      {
        titulo: "Antipartículas",
        descripcion:
         "A cada particula elementales se le asocia una antiparticula con la misma masa y espín, pero con cargas opuestas. Cuando se aniquilan, dan lugar a la emisión de e energía. El positrón es la antiparticula del electrón.",
        imagen: "Antipartículas.jpeg",
        pdf: "Antipartículas.pdf",
        audio: "Antipartículas.ogg",
        audioId: "audio-10",
      },
      {
        titulo: "Leptones y Quarks",
        descripcion:
         "Los quarks y leptones son tipos de particulas fundamentales que componen la materia y son considerados los ladrillos de construcción básico del universo según el Modelo Estándar.",
        imagen: "Leptones y Quarks.jpeg",
        pdf: "Leptones y Quarks.pdf",
        audio: "Leptones y Quarks.ogg",
        audioId: "audio-11",
      },
      {
        titulo: "Radioactividad, neutrinos, oscilaciones de neutrinos.",
        descripcion:
         `La radioactividad corresponde a la emisión de radiación  de núcleos atómicos inestables. Hay tres tipos de radiación: alfa, beta y gama.
Los neutrinos son particulas elementales que son muy difíciles de detectar, tiene una masa muy, muy pequeña, espín 1/2, no tiene carga. 
Los tipos de neutrinos son: eléctricos, muonicos y tauonicos. 
Las oscilaciones de neutrinos correponde a las transformaciones de un tipo de neutrino a otro.`,
        imagen: "Radioactividad, neutrinos, oscilaciones de neutrinos..png",
        pdf: "Radioactividad, neutrinos, oscilaciones de neutrinos..pdf",
        audio: "Radioactividad, neutrinos, oscilaciones de neutrinos..ogg",
        audioId: "audio-12",
      },
      {
        titulo: "Bosones, fermiones y el espín.",
        descripcion:
        "El espín determina los estados cuanticos en que pueden encontrarse una colectividad de un mismo tipo de de particulas. Si el espín es semientero son fermiones y con espín entero son bosones.",
        imagen: "Bosones, fermiones y el espín..jpeg",
        pdf: "Bosones, fermiones y el espín..pdf",
        audio: "Bosones, fermiones y el espín..ogg",
        audioId: "audio-13",
      },
    ];
  
    // Selecciona el contenedor de los podcasts
    const podcastContainer = document.getElementById("podcast-container");
  
    // Itera sobre el array y genera el HTML de cada podcast
    podcasts.forEach((podcast) => {
      const podcastItem = document.createElement("div");
      podcastItem.classList.add("podcast-item");
  
      podcastItem.innerHTML = `
        <hr class="mb-4" />
        <div class="row g-2 ">
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center">
            <img src="/files/${podcast.imagen}" class="altura-img" alt="podcast" />
          </div>
          <div class="col-xl-9 col-lg-8 col-md-8 col-sm-8">
            <div>
              <span class="fw-bold titulo">${podcast.titulo}</span>
              <br /> ${podcast.descripcion}
              <br />
              <div class="mt-2">
                <a href="/files/${podcast.pdf}" download class="fa fa-file-pdf margen-pdf"></a>
                <i class="fa-solid fa-circle-play play-button" data-id="${podcast.audioId}"></i>
                <audio id="${podcast.audioId}" src="/files/${podcast.audio}"></audio>
              </div>
            </div>
          </div>
        </div>
      `;
  
      // Añade el item al contenedor
      podcastContainer.appendChild(podcastItem);
    });
  
    // Controlar la reproducción/pausa del audio
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
      button.addEventListener('click', () => {
        const audioId = button.getAttribute('data-id');
        const audio = document.getElementById(audioId);
  
        // Detener otros audios que están sonando
        document.querySelectorAll('audio').forEach(aud => {
          if (aud !== audio) {
            aud.pause();
            aud.currentTime = 0;
            const btn = document.querySelector(`.play-button[data-id="${aud.id}"]`);
            btn.classList.remove('fa-pause');
            btn.classList.add('fa-circle-play');
          }
        });
  
        // Reproducir o pausar el audio seleccionado
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
  });
  