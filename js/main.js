const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})
// nava mobile
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'https://www.youtube.com/watch?v=rJabgOChWiM&list=RDrJabgOChWiM&start_radio=1',
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
    // 

}

function onPlayerReady(event) {
    event.target.playVideo();
}

//slide hình
const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

let x = 0;
let timer = 0;

prevEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateContainer();
})

nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateContainer();
})

function updateContainer() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x = x - 45;
        updateContainer();
    }, 2000);
}
updateContainer();
// clock


function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}