let music = document.querySelector('audio');
let toggleBtn = document.getElementById('toggleBtn');
let isPlaying = false;
let audioPlayer = document.getElementById('audioPlayer');
let audioImage = document.getElementById('Image');
let songName = document.getElementById('songName');
let songIndex = 0;
let musicList = ['aud/Alo-Alo_Tahsan.mp3','aud/ek-paye-nupur.mp3','aud/Dhusor somoy.mp3','aud/Dukkho_Bilash.mp3','aud/Epitaph.mp3','aud/Bojhena se bojhena.mp3'];
const imgList = ['img/alo alo.jpg','img/ek paye.jpg','img/artcell.jpg','img/artcell.jpg','img/sonar bangla.jpg','img/bojhena.jpg'];


const metal = () => {
    alert('This feature will come soon.Please wait few days.Thanked by bipul chandro roy');
}
const soft = () => {
    alert('Already selected')
}

//////////////////////////// music play & pause function starts here //////////////////////////////////////////
const playAudio = () => {
    isPlaying ? pauseMusic() : playMusic();
}
//////////////////////////// music play & pause function starts here //////////////////////////////////////////



//////////////////////////////////////////// play button start here /////////////////////////////////////////////
const playMusic = () => {
    isPlaying = true;
    music.play();
    audioImage.classList.add('rotation')
    toggleBtn.classList.add('fa-pause-circle');
    toggleBtn.classList.remove('fa-play');
    
}
//////////////////////////////////////////// play button ends here /////////////////////////////////////////////



//////////////////////////////////////////// pause button start here /////////////////////////////////////////////
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    audioImage.classList.remove('rotation')
    toggleBtn.classList.add('fa-play');
    toggleBtn.classList.remove('fa-pause-circle');
}
//////////////////////////////////////////// play button ends here /////////////////////////////////////////////



//////////////////////////////////////////// next button starts here /////////////////////////////////////////////
const nextBtn = () => {
    songIndex++
    if (songIndex >= musicList.length) {
        songIndex = 0;
    }
    audioPlayer.setAttribute('src',musicList[songIndex]);
    audioImage.setAttribute('src',imgList[songIndex]);
    songName.innerText = musicList[songIndex]
    music.play();
    toggleBtn.classList.remove('fa-play');
    toggleBtn.classList.add('fa-pause-circle');
    audioImage.classList.add('rotation')
}
//////////////////////////////////////////// next button ends here /////////////////////////////////////////////



//////////////////////////////////////////// prev button starts here /////////////////////////////////////////////
const preBtn = () => {
    songIndex--
    if (songIndex <= -1) {
        songIndex = musicList.length - 1;
    }
    audioPlayer.setAttribute('src',musicList[songIndex]);
    audioImage.setAttribute('src',imgList[songIndex]);
    songName.innerText = musicList[songIndex]
    music.play();
    toggleBtn.classList.remove('fa-play');
    toggleBtn.classList.add('fa-pause-circle');
    audioImage.classList.remove('rotation')

}
//////////////////////////////////////////// prev button ends here /////////////////////////////////////////////