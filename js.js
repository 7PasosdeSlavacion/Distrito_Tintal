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


    audioButton.addEventListener('click', function() {
        if (!audioPlaying) {

            audio.play();
            audioPlaying = true;
        } else {

            audio.pause();
            audioPlaying = false;
        }
    });