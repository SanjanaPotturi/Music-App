const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

const songs = [
    "songs/song1.mp3",
    "songs/song2.mp3",
    "songs/song3.mp3"
];

let currentSong = 0;

audio.src = songs[currentSong];

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "⏸ Pause";
    } else {
        audio.pause();
        playBtn.innerHTML = "▶ Play";
    }
}

audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

progress.addEventListener("input", () => {
    if (audio.duration) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

function nextSong() {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    audio.src = songs[currentSong];
    audio.play();
    playBtn.innerHTML = "⏸ Pause";
}

function prevSong() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    audio.src = songs[currentSong];
    audio.play();
    playBtn.innerHTML = "⏸ Pause";
}