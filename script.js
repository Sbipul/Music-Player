let music = document.querySelector('audio');
let toggleBtn = document.getElementById('toggleBtn');
let isPlaying = false;
let audioPlayer = document.getElementById('audioPlayer');
let audioImage = document.getElementById('Image');
const audioImageContainer = document.querySelector('.audioImageContainer');
let songName = document.getElementById('songName');
const imageContainer = document.querySelector('.Image');
let songIndex = 0;
let musicList = ['aud/Alo-Alo_Tahsan.mp3','aud/ek-paye-nupur.mp3','aud/Epitaph.mp3','aud/Bojhena se bojhena.mp3'];
let imgList = ['img/alo alo.jpg','img/ek paye.jpg','img/sonar bangla.jpg','img/bojhena.jpg'];



////////////////////////// metal songs starts here ////////////////////////////////////////////
const metal = () => {
    audioImage.removeAttribute('src');
    musicList = ['aud/Oniket Prantor.mp3','aud/Dhusor somoy.mp3','aud/Dukkho_Bilash.mp3'];
    imgList = ['img/oniket_prantor.png','img/artcell.jpg','img/artcell.jpg']
    audioPlayer.setAttribute('src',musicList[songIndex]);
    audioImage.setAttribute('src',imgList[songIndex]);
    songName.innerText = musicList[songIndex]
    music.play();
    showList();
}
////////////////////////// metal songs ends here ////////////////////////////////////////////




////////////////////////// soft songs starts here ////////////////////////////////////////////
const soft = () => {
    musicList = ['aud/Alo-Alo_Tahsan.mp3','aud/ek-paye-nupur.mp3','aud/Epitaph.mp3','aud/Bojhena se bojhena.mp3'];
    imgList = ['img/alo alo.jpg','img/ek paye.jpg','img/sonar bangla.jpg','img/bojhena.jpg'];
    audioImage.setAttribute('src',imgList[songIndex]);
    audioPlayer.setAttribute('src',musicList[songIndex]);
    songName.innerText = musicList[songIndex]
    music.play();
    showList();
}
////////////////////////// soft songs ends here ////////////////////////////////////////////




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
    toggleBtn.classList.replace('fa-pause-circle','fa-play');
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
    toggleBtn.classList.replace('fa-play','fa-pause-circle');
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
    toggleBtn.classList.replace('fa-play','fa-pause-circle');
    audioImage.classList.add('rotation')

}
//////////////////////////////////////////// prev button ends here /////////////////////////////////////////////





//////////////////////////////////////////// show list starts here /////////////////////////////////////////////
const showList = () => {
    const songList =  document.getElementById('songList');
    songList.textContent = '';
    document.getElementById('listOn').style.display = 'none'
    document.getElementById('listOff').style.display = 'block'
    imageContainer.style.borderRadius = '0';
    audioImageContainer.style.display = 'none';
    musicList.map(song => {
        const p = document.createElement('p');
        p.classList.add('eachSong');
        p.innerHTML = `
        <span id="currentSong" onclick="playThis('${song}')">${song}</span>
        `
        songList.appendChild(p);
    });


}
//////////////////////////////////////////// show list ends here /////////////////////////////////////////////


// hide list 
const hideList = () => {
    document.getElementById('songList').textContent = '';
    document.getElementById('listOn').style.display = 'block'
    document.getElementById('listOff').style.display = 'none'
    imageContainer.style.borderRadius = '100%';
    audioImageContainer.style.display = 'block';
}


///////////////////////////////// playing running song by clicking on song name ///////////////////////////////
const playThis = (song) => {
    toggleBtn.classList.replace('fa-play','fa-pause-circle');
    audioPlayer.setAttribute('src',song);
    songName.innerText = song;
    music.play();
    let imgIndx = imgList.indexOf(song)
    console.log(imgIndx)
}
///////////////////////////////// playing running song by clicking on song name ///////////////////////////////
