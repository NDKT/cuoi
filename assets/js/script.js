const modal = document.querySelector ('.js-modal')
const modalClose = document.querySelector ('.js-modal-close')
const modalContainer = document.querySelector ('.js-modal-container')

function move(elm) {
    elm.style.possiton = 'absolute'
    elm.style.top = Math.floor(Math.random() * 80) + '%'
    elm.style.right = Math.floor(Math.random()* 80) + '%'
}


function showForm() {
    modal.classList.add('open')
}

function closeForm() {
    modal.classList.remove('open')
}

var btn = document.querySelector('#no');
btn.addEventListener('mouseover', function(e) { 
    move(e.target)
})

btn.addEventListener('click', function(e) { 
    move(e.target)
})

var btn = document.querySelector('#yes');
btn.addEventListener('click', showForm);

btn.addEventListener('click', function() {
    const musicl = ['./assets/sound/music.mp3','./assets/sound/music2.mp3','./assets/sound/music3.mp3'];
    const random = musicl[Math.floor(Math.random()*musicl.length)];
    const btnSound = document.querySelector('.item.sound');
    const song = document.querySelector('#music');
    song.src = random;
    var audio = document.getElementById('music');
    audio.play(true);
})

modalClose.addEventListener('click', closeForm);
modalClose.addEventListener('click', function() {
    var audio = document.getElementById('music');
    audio.load();
})
modal.addEventListener('click', closeForm);
modal.addEventListener('click', function() {
    var audio = document.getElementById('music');
    audio.load();
})
