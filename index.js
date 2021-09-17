
// selectors
let music = document.querySelector('audio');
let song = document.getElementById('songName');
let movie = document.getElementById("movie");
let singer = document.getElementById("singer");
let duration = document.getElementById("duration"); 
let prev = document.getElementById('prev');
let play=document.getElementById('myPlay');
let next = document.getElementById('next');
let selSong = document.querySelectorAll(".play-song");
let image = document.getElementById('img');

// array of songs
const songs =[
    {
        song : "Phir Bhi Aas Lagi Hai Dil Mein",
        movie : "Album",
        singer : "Jai Walia, Sagar Kalra",
        duration : "03:16",
        img : "m1.jpg",
        src : "m1.mp3"
    },
    {
        song : " Is Qadar - Darshan Raval",
        movie : "Album",
        singer : "Darshan Raval, Sachet-Parampara,Tulasi Kumar",
        duration : "03:46",
        img : "m2.jpg",
        src : "m2.mp3"
    },
    {
        song : "Tujhe Bhoolna Toh Chaaha",
        movie : "Bewafa Sanam",
        singer : "Jubin Nautiyal, Rochak Kohli",
        duration : "04:35",
        img : "m3.jpg",
        src : "m3.mp3"
    },
    {
        song : "Oye Hoye Hoye - Jassie Gill",
        movie : "Album",
        singer : "Jassi Gill, Simar Kaur",
        duration : "02:52",
        img : "m4.jpg",
        src : "m4.mp3"
    },
    {
        song : "Birthday Pawri - Meet Bros",
        movie : "Album",
        singer : "Meet Bros, Amit Mishra",
        duration : "04:04",
        img : "m5.jpg",
        src : "m5.mp3"
    },
    {
        song : "Kutti Mohabbat",
        movie : "Album",
        singer : "Jubin Nautiyal",
        duration : "03:48",
        img : "m6.jpg",
        src : "m6.mp3"
    }
]


let isPlaying=false;
let songIndex=0;

//play
const playMusic =()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
};

// pause
const pauseMusic = () =>
{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");

};

//play-pause button
play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
})

// song content changes
const songAdd = (songs) =>{
    song.textContent = songs.song;
    movie.textContent = songs.movie;
    singer.textContent= songs.singer;
    duration.textContent= songs.duration;
    image.src = "images/"+ songs.img ;
    music.src = "music/"+ songs.src;    
};

songAdd(songs[songIndex]);

next.addEventListener('click', ()=>{
    songIndex = (songIndex+1) % songs.length;
    songAdd(songs[songIndex]);
    if(isPlaying == true){
        music.play();
    }
})

prev.addEventListener('click', ()=>{
    songIndex = (songIndex-1 + songs.length) % songs.length;
    songAdd(songs[songIndex]);
    if(isPlaying == true){
        music.play();
    }
})

// Playing the from the list
function playSelected(element){
    let idname = element.id;
    let index = parseInt(idname[1])-1;
    songIndex = index;
    songAdd(songs[songIndex]);
    playMusic();
}