const image1 = require('../assets/img/jacinto-1.jpg');
const image2 = require('../assets/img/jacinto-2.jpg');
const image3 = require('../assets/img/jacinto-3.jpg');
const image4 = require('../assets/img/metric-1.jpg');

const song1 = require('../assets/music/jacinto-1.mp3');
const song2 = require('../assets/music/jacinto-2.mp3');
const song3 = require('../assets/music/jacinto-3.mp3');
const song4 = require('../assets/music/metric-1.mp3');

interface Song {
  name: string;
  song: string;
  displayName: string;
  artist: string;
}

const SONGS: Song[] = [
  {
    name: image1,
    song: song1,
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design'
  },
  {
    name: image2,
    song: song2,
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design'
  },
  {
    name: image3,
    song: song3,
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design'
  },
  {
    name: image4,
    song: song4,
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design'
  }
];

export class App {
  constructor() {
    this.playOrPause();
    this.loadSong(SONGS[this.songIndex]);
    this.prev();
    this.next();
    this.progressChange();
    this.changeCurrentTime();
    this.playNextSong();
  }

  image = document.querySelector('img');
  title = document.getElementById('title');
  artist = document.getElementById('artist');

  music = document.querySelector('audio') as HTMLAudioElement;
  prevBtn = document.getElementById('prev') as HTMLButtonElement;
  playBtn = document.getElementById('play') as HTMLButtonElement;
  nextBtn = document.getElementById('next') as HTMLButtonElement;

  progressContainer = document.getElementById('progress-container');
  progress = document.getElementById('progress');
  currentTimeEl = document.getElementById('current-time');
  durationEl = document.getElementById('duration');

  // Check if playing
  isPlaying = false;

  songIndex = 0;

  //Play
  playSong() {
    this.isPlaying = true;
    this.playBtn.classList.replace('fa-play', 'fa-pause');
    this.playBtn.setAttribute('title', 'Pause');
    this.music.play();
  }
  // Pause
  pauseSong() {
    this.isPlaying = false;
    this.playBtn.classList.replace('fa-pause', 'fa-play');
    this.playBtn.setAttribute('title', 'Play');
    this.music.pause();
  }

  // Play or pause event
  playOrPause() {
    this.playBtn.addEventListener('click', () => {
      this.isPlaying ? this.pauseSong() : this.playSong();
    });
  }

  // Update the DOM
  loadSong(song: Song) {
    this.title.textContent = song.displayName;
    this.artist.textContent = song.artist;
    this.music.src = song.song;
    this.image.src = song.name;
  }

  // Prev song
  prev() {
    this.prevBtn.addEventListener('click', this.prevSong.bind(this));
  }

  // Next song
  next() {
    this.nextBtn.addEventListener('click', this.nextSong.bind(this));
  }

  prevSong() {
    this.songIndex <= 0
      ? (this.songIndex = SONGS.length - 1)
      : this.songIndex--;
    this.loadSong(SONGS[this.songIndex]);
    this.playSong();
  }

  nextSong() {
    this.songIndex >= SONGS.length - 1
      ? (this.songIndex = 0)
      : this.songIndex++;
    this.loadSong(SONGS[this.songIndex]);
    this.playSong();
  }

  progressChange() {
    this.music.addEventListener(
      'timeupdate',
      this.updateProgressbar.bind(this)
    );
  }

  updateProgressbar(e?: any) {
    if (this.isPlaying) {
      const { duration, currentTime } = e.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      this.progress.style.width = `${progressPercent}%`;
      // Duration
      let durationMinutes = Math.floor(duration / 60);
      let durationSeconds: any = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
      }
      if (durationSeconds) {
        this.durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
      }
      // Current
      let currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds: any = Math.floor(currentTime % 60);
      if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
      }
      if (currentSeconds) {
        this.currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
      }
    }
  }

  changeCurrentTime() {
    this.progressContainer.addEventListener(
      'click',
      this.setProgressbar.bind(this)
    );
  }

  setProgressbar(e?: any) {
    const width = e.srcElement.clientWidth;
    const clickX = e.offsetX;
    const { duration } = this.music;
    this.music.currentTime = (clickX / width) * duration;
  }

  playNextSong() {
    this.music.addEventListener('ended', this.nextSong.bind(this));
  }
}
