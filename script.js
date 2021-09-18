let music = document.querySelector('audio');
let toggleBtn = document.getElementById('toggleBtn');
let isPlaying = false;
let audioPlayer = document.getElementById('audioPlayer');
let audioImage = document.getElementById('Image');
let songName = document.getElementById('songName');
let songIndex = 0;
let musicList = ['aud/Alo-Alo_Tahsan.mp3','aud/ek-paye-nupur.mp3','aud/Epitaph.mp3','aud/Bojhena se bojhena.mp3'];
let imgList = ['img/alo alo.jpg','img/ek paye.jpg','img/sonar bangla.jpg','img/bojhena.jpg'];


const metal = () => {
    audioImage.removeAttribute('src');
    musicList = ['aud/Oniket Prantor.mp3','aud/Dhusor somoy.mp3','aud/Dukkho_Bilash.mp3'];
    imgList = ['img/oniket_prantor.png','img/artcell.jpg','img/artcell.jpg']
    audioPlayer.setAttribute('src',musicList[songIndex]);
    audioImage.setAttribute('src',imgList[songIndex]);
    songName.innerText = musicList[songIndex]
    playMusic();
    showList();
}
const soft = () => {
    musicList = ['aud/Alo-Alo_Tahsan.mp3','aud/ek-paye-nupur.mp3','aud/Epitaph.mp3','aud/Bojhena se bojhena.mp3'];
    imgList = ['img/alo alo.jpg','img/ek paye.jpg','img/sonar bangla.jpg','img/bojhena.jpg'];
    audioImage.setAttribute('src',imgList[songIndex]);
    audioPlayer.setAttribute('src',musicList[songIndex]);
    songName.innerText = musicList[songIndex]
    playMusic();
    showList();
}
const rock = () => {
    alert('This feature is comming soon');
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
    audioImage.classList.add('rotation')

}
//////////////////////////////////////////// prev button ends here /////////////////////////////////////////////





//////////////////////////////////////////// show list starts here /////////////////////////////////////////////
const showList = () => {
    const imageContainer = document.querySelector('.Image');
    imageContainer.style.borderRadius = '0';
    imageContainer.textContent = '';
    musicList.map(song => {
        const p = document.createElement('p');
        p.classList.add('eachSong');
        p.innerHTML = `
        <span id="currentSong" onclick="playThis('${song}')">${song}</span>
        `
        imageContainer.appendChild(p);
    });


}
//////////////////////////////////////////// show list ends here /////////////////////////////////////////////





///////////////////////////////// playing running song by clicking on song name ///////////////////////////////
const playThis = (song) => {
    audioPlayer.setAttribute('src',song);
    songName.innerText = song;
    music.play();

}
///////////////////////////////// playing running song by clicking on song name ///////////////////////////////