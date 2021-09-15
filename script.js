let music = document.querySelector('audio');
let toggleBtn = document.getElementById('toggleBtn');
let isPlaying = false;
const playAudio = () => {
    isPlaying ? pauseMusic() : playMusic();
}
const playMusic = () => {
    isPlaying = true;
    music.play();
    toggleBtn.classList.add('fa-pause-circle');
    toggleBtn.classList.remove('fa-play');
}
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    toggleBtn.classList.add('fa-play');
    toggleBtn.classList.remove('fa-pause-circle');
}