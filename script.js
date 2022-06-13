import { songs } from "./store/music/music.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");

const app = {
  currentIndex: 0,
  render: function () {
    const htmls = songs.map((song) => {
      return `     <div class="song">
        <div
          class="thumb"
          style="background-image: url('${song.image}')"
        ></div>
        <div class="body">
          <h3 class="title">${song.name}</h3>
          <p class="author">${song.singer}</p>
        </div>
        <div class="option">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>`;
    });
    $(".playlist").innerHTML = htmls.join("");
  },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return songs[this.currentIndex];
      },
    });
  },

  handleEvents: function () {
    const cdWidtd = cd.offsetWidth;
    // ScrollTop to hide CD Thumb
    document.onscroll = function () {
      const scrollTop = window.screenY || document.documentElement.scrollTop;
      const newCdWidth = cdWidtd - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0 + "px";
      cd.style.opacity = newCdWidth / cdWidtd;
    };
  },

  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },

  start: function () {
    // Define object properties
    this.defineProperties();

    // Handle events (DOM Events)
    this.handleEvents();

    // Handle load current song info to UI when app start
    this.loadCurrentSong();

    // Render playlist
    this.render();
  },
};
app.start();
