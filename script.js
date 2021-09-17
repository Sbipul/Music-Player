let music = document.querySelector('audio');
let toggleBtn = document.getElementById('toggleBtn');
let isPlaying = false;
let audioPlayer = document.getElementById('audioPlayer');
let audioImage = document.getElementById('Image');
let songName = document.getElementById('songName');
let songIndex = 0;
let musicList = ['aud/Alo-Alo_Tahsan.mp3','aud/ek-paye-nupur.mp3','aud/Dhusor somoy.mp3','aud/Dukkho_Bilash.mp3','aud/Epitaph.mp3'];
const imgList = ['img/alo alo.jpg','img/ek paye.jpg','img/artcell.jpg','img/artcell.jpg','img/sonar bangla.jpg'];


const metal = () => {
    // musicList = ['aud/Dhusor somoy.mp3','aud/Dukkho_Bilash.mp3'];
    alert('This feature will come soon.Plese wait few days.thanked by bipul chandro roy')
}
const soft = () => {
    // musicList = ['aud/Dhusor somoy.mp3','aud/Dukkho_Bilash.mp3'];
    alert('Already selected')
}
// let newList = metal();
// musicList = newList;


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
    toggleBtn.classList.add('fa-pause-circle','text-primary');
    toggleBtn.classList.remove('fa-play','text-success');
    
}
//////////////////////////////////////////// play button ends here /////////////////////////////////////////////



//////////////////////////////////////////// pause button start here /////////////////////////////////////////////
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    audioImage.classList.remove('rotation')
    toggleBtn.classList.add('fa-play','text-success');
    toggleBtn.classList.remove('fa-pause-circle','text-primary');
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
}
//////////////////////////////////////////// prev button ends here /////////////////////////////////////////////