let music = document.querySelector('audio');
let toggleBtn = document.getElementById('toggleBtn');
let isPlaying = false;
let audioPlayer = document.getElementById('audioPlayer');
let songIndex = 0;
const musicList = ['aud/Alo-Alo_Tahsan.mp3','aud/ek-paye-nupur.mp3','aud/Epitaph-Shonar-Bangla-Circus.mp3'];


//////////////////////////// music play & pause function starts here //////////////////////////////////////////
const playAudio = () => {
    isPlaying ? pauseMusic() : playMusic();
}
//////////////////////////// music play & pause function starts here //////////////////////////////////////////



//////////////////////////////////////////// play button start here /////////////////////////////////////////////
const playMusic = () => {
    isPlaying = true;
    music.play();
    toggleBtn.classList.add('fa-pause-circle');
    toggleBtn.classList.remove('fa-play');
}
//////////////////////////////////////////// play button ends here /////////////////////////////////////////////



//////////////////////////////////////////// pause button start here /////////////////////////////////////////////
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    toggleBtn.classList.add('fa-play');
    toggleBtn.classList.remove('fa-pause-circle');
}
//////////////////////////////////////////// play button ends here /////////////////////////////////////////////


const nextBtn = () => {
    songIndex++
    if (songIndex >= musicList.length) {
        songIndex = 0;
    }
    audioPlayer.setAttribute('src',musicList[songIndex]);
    music.play();
}

const preBtn = () => {
    songIndex--
    if (songIndex <= -1) {
        songIndex = musicList.length - 1;
    }
    audioPlayer.setAttribute('src',musicList[songIndex]);
    music.play();
}