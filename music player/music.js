// const audio = document.getElementById('audio');
// const playBtn = document.getElementById('play');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// const title = document.getElementById('title');

// const songs = [
//   { name: 'song1', title: 'Song One' },
//   { name: 'song2', title: 'Song Two' },
//   { name: 'song3', title: 'Song Three' }
// ];

// let songIndex = 0;

// function loadSong(song) {
//   title.textContent = song.title;
//   audio.src = `${song.name}. https://www.jiosaavn.com/song/what-jhumka-from-rocky-aur-rani-kii-prem-kahaani/KSklYBIDQEQ`;
// }

// function playSong() {
//   audio.play();
//   playBtn.textContent = '⏸️';
// }

// function pauseSong() {
//   audio.pause();
//   playBtn.textContent = '▶️ ';
// }

// let isPlaying = false;
// playBtn.addEventListener('click', () => {
//   if (isPlaying) {
//     pauseSong();
//   } else {
//     playSong();
//   }
//   isPlaying = !isPlaying;
// });

// prevBtn.addEventListener('click', () => {
//   songIndex = (songIndex - 1 + songs.length) % songs.length;
//   loadSong(songs[songIndex]);
//   playSong();
//   isPlaying = true;
// });

// nextBtn.addEventListener('click', () => {
//   songIndex = (songIndex + 1) % songs.length;
//   loadSong(songs[songIndex]);
//   playSong();
//   isPlaying = true;
// });

// // Load the first song initially
// loadSong(songs[songIndex]);

// const songs = [
//   {
//     title: "Dreamy Vibes",
//     artist: "Unknown Artist",
//     file: "assets/song1.mp3",
//     cover: "assets/cover1.jpg"
//   },
//   {
//     title: "Golden Hour",
//     artist: "Sunset Beats",
//     file: "assets/song2.mp3",
//     cover: "assets/cover2.jpg"
//   }
// ];


const songs = [
  {
    title: "Dreamy Vibes",
    artist: "Mixaund",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Mixaund/Earth/Mixaund_-_Dreamy.mp3",
    cover: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Golden Hour",
    artist: "Loyalty Freak Music",
    file: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Loyalty_Freak_Music/LOFI/Loyalty_Freak_Music_-_02_-_Golden_Hour.mp3",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
  }
];

let current = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const volumeSlider = document.getElementById("volume");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.file;
  cover.src = song.cover;
  title.textContent = song.title;
  artist.textContent = song.artist;
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % songs.length;
  loadSong(current);
  audio.play();
  playBtn.textContent = "⏸";
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  audio.play();
  playBtn.textContent = "⏸";
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

loadSong(current);




