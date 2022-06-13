import {songs} from './store/music/music.js'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    render: function(){
        const htmls = songs.map(song=> {
    return   `     <div class="song">
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
      </div>`
        })
        $('.playlist').innerHTML = htmls.join('')
    },
    start: function(){
        this.render()
    }
}
app.start()