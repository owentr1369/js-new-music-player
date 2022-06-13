import { songs } from "./store/music/music.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
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
  handleEvents: function () {
    const cd = $(".cd");
    const cdWidtd = cd.offsetWidth;

    document.onscroll = function () {
      const scrollTop = window.screenY || document.documentElement.scrollTop;
      const newCdWidth = cdWidtd - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0 + "px";
      cd.style.opacity = newCdWidth / cdWidtd;
    };
  },
  start: function () {
    this.handleEvents();
    this.render();
  },
};
app.start();
