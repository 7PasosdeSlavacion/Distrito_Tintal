function togglePlayPause() {
  var video = document.getElementById("miVideo");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Obtenemos el elemento de audio y el botón
const audio = document.getElementById('audio');
const audioButton = document.getElementById('audioButton');


let audioPlaying = false;


audioButton.addEventListener('click', function () {
  if (!audioPlaying) {

    audio.play();
    audioPlaying = true;
  } else {

    audio.pause();
    audioPlaying = false;
  }
});

verse1.addEventListener('click', function () {
  if (!audioPlaying) {

    audioVerse1.play();
    audioPlaying = true;
  } else {

    audioVerse1.pause();
    audioPlaying = false;
  }
});

verse2.addEventListener('click', function () {
  if (!audioPlaying) {

    audioVerse2.play();
    audioPlaying = true;
  } else {

    audioVerse2.pause();
    audioPlaying = false;
  }
});

verse3.addEventListener('click', function () {
  if (!audioPlaying) {

    audioVerse3.play();
    audioPlaying = true;
  } else {

    audioVerse3.pause();
    audioPlaying = false;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    var overlay = document.getElementById('overlay');
  
    overlay.classList.add('mostrar');
  
    var cerrarBtn = document.getElementById('cerrar');
    cerrarBtn.addEventListener('click', function () {
      overlay.classList.remove('mostrar');
    });
  }, 2000); 
});


/*document.addEventListener("DOMContentLoaded", function() {
    var cookieOverlay = document.getElementById('cookie-overlay');
    var aceptarCookiesBtn = document.getElementById('aceptar-cookies');

    // Verificar si el usuario ya aceptó las cookies en el pasado
    var cookiesAceptadas = localStorage.getItem('cookiesAceptadas');

    if (!cookiesAceptadas) {
        // Si las cookies no fueron aceptadas previamente, mostrar el mensaje
        cookieOverlay.style.display = 'block';
    }

    // Al hacer clic en el botón de aceptar cookies
    aceptarCookiesBtn.addEventListener('click', function() {
        // Ocultar el mensaje de cookies
        cookieOverlay.style.display = 'none';

        // Almacenar la aceptación de cookies en el almacenamiento local
        localStorage.setItem('cookiesAceptadas', 'true');
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var cookieOverlay = document.getElementById('cookie-overlay');
    var aceptarCookiesBtn = document.getElementById('aceptar-cookies');

    // Mostrar el mensaje de cookies
    cookieOverlay.style.display = 'block';

    // Al hacer clic en el botón de aceptar cookies, ocultar el mensaje
    aceptarCookiesBtn.addEventListener('click', function () {
      cookieOverlay.style.display = 'none';
      // También podrías guardar una cookie aquí para recordar la elección del usuario
    });
  }, 7000); // 10 segundos en milisegundos
});


function Enviar(id) {

  switch (id) {
    case 'venajesus':
      var url = "https://www.youtube.com/watch?v=UVpB3nExk_w&list=PLZ0yIOXiQ3mVXGh7m5jPn3oTLbryVj3jN&ab_channel=AlexisGoitia";
      window.open(url, "_blank");
      break;

    case '40diasdeoracion':
      var url = "https://www.youtube.com/watch?v=LpeqcyV5BYs&list=PLZ0yIOXiQ3mXSKLLZZ2uwHkO_1blWqOkc&ab_channel=AlexisGoitia";
      window.open(url, "_blank");
      break;

    case 'amanecerconjesus':
      var url = "https://www.youtube.com/watch?v=2OWgKfxJiTQ&list=PLZ0yIOXiQ3mXSIhZ6WTz-91JBZquVw3ZO&ab_channel=AlexisGoitia";
      window.open(url, "_blank");
      break;

    case 'esperanzacolombiaradio':
      var url = "https://www.esperanzacolombiaradio.com/";
      window.open(url, "_blank");
      break;

    default:
      var url = "Error.html";
      window.location.href = url;
      break;
  }

}

window.addEventListener('scroll', function () {
  var scrollButton = document.getElementById('scrollButton');
  var header = document.getElementById('header');
  var content = document.getElementById('content');

  if (window.scrollY > header.offsetHeight) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }

  if (isInViewport(header) && !isInViewport(content)) {
    scrollButton.style.display = 'none';
  }
});

function scrollToTop() {
  var currentPosition = window.pageYOffset; // Posición actual de desplazamiento
  var targetPosition = 0; // Posición a la que queremos desplazarnos
  var distance = targetPosition - currentPosition; // Distancia que necesitamos desplazarnos
  var duration = 1000; // Duración de la animación en milisegundos
  var startTime; // Tiempo inicial del desplazamiento

  // Función de animación para desplazamiento suave
  function animation(currentTime) {
    if (startTime === undefined) {
      startTime = currentTime;
    }
    var elapsedTime = currentTime - startTime;
    var easing = function (t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }; // Función de aceleración
    var scrollPosition = easing(elapsedTime / duration) * distance + currentPosition;
    window.scrollTo(0, scrollPosition);
    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  }

  // Iniciar la animación
  requestAnimationFrame(animation);
}


function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("DOMContentLoaded", function () {
  // Array de mensajes aleatorios
  var mensajes = [
    "Así que no temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré; te sostendré con mi diestra victoriosa.",
    "Bueno es el Señor; es refugio en el día de la angustia, y protector de los que en él confían.",
    "La paz les dejo; mi paz les doy. Yo no se la doy a ustedes como la da el mundo. No se angustien ni se acobarden.",
    "Pues Dios no nos ha dado un espíritu de timidez, sino de poder, de amor y de dominio propio."
  ];

  // Función para mostrar el mensaje emergente
  function mostrarMensaje() {
    var mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    var popup = document.getElementById("popup");
    popup.textContent = mensajeAleatorio;
    popup.style.display = "block";
    setTimeout(function () {
      popup.style.display = "none";
    }, 9000); // El mensaje desaparecerá después de 10 segundos (10000 milisegundos)
  }

  // Llamar a la función inicialmente
  setTimeout(mostrarMensaje, 10000);
  // Llamar a la función cada cierto tiempo (en este caso, cada 30 segundos)
  setInterval(mostrarMensaje, 60000);
});


document.addEventListener("DOMContentLoaded", function() {
  var mostrarBoton = document.getElementById("mostrar-reproductor");
  var cerrarBoton = document.getElementById("cerrar-reproductor");
  var pausarBoton = document.getElementById("pausar-reproductor");
  var reproductorContainer = document.getElementById("reproductor-container");
  var reproductor = document.getElementById("reproductor");
  var volumenControl = document.getElementById("volumen");

  mostrarBoton.addEventListener("click", function() {
      reproductorContainer.style.display = "block";
      reproductor.play();
  });

  cerrarBoton.addEventListener("click", function() {
      reproductorContainer.style.display = "none";
      reproductor.pause();
  });

  pausarBoton.addEventListener("click", function() {
      if (reproductor.paused) {
          reproductor.play();
          pausarBoton.innerHTML = `<ion-icon name="pause-circle" style="font-size: 50px;"></ion-icon>`;
      } else {
          reproductor.pause();
          pausarBoton.innerHTML = `<ion-icon name="play-circle" style="font-size: 50px;"></ion-icon>`;
      }
  });

  volumenControl.addEventListener("input", function() {
      reproductor.volume = volumenControl.value;
  });
});


