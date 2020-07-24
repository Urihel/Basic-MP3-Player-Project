//DOM Global Variables 
var outterMP3 = document.getElementById("outter-mp3");
var playButton = document.getElementById("playButton");
var song = document.getElementById("track");
var songTitle = document.getElementById("songTitle");
var progressBar = document.getElementById("progressBar");
var songProgress = document.getElementById("songProgress");
var myDuration = song.duration; 
console.log(myDuration);
//play button function
var n = 0;

playButton.addEventListener("click", function (e) {

    n += 1;
    if(n % 1 === 0) {
        playButton.innerHTML = "Play";
        console.log(e);
        console.log(n);
        songTitle.innerHTML = "What's poppin - JackHarlow";
        song.play();
        //The code below is a progess bar that operates with the 
        //the audio file and button which allows it to work progress
        //as the song continues.
        var s = 0;

        var x = setInterval(function () {
            s += 150/myDuration;
            console.log(s);
            if(s < 151) {
                songProgress.style.width = s+"px";
                if(s > 150) {
                clearInterval(x);
                }
            }    
        },1000);

        if(n %2 === 0) {
            playButton.innerHTML ="Pause";
            console.log(e);
            console.log(n);
            song.pause();
        }
    }  
});
//TESTER SETINTERVAL TO MAKE SURE BAR IS WORKING
// var s = 0;

// var x = setInterval(function () {
//     s += 1.03;
//     console.log(s);
//     if(s < 151) {
//         songProgress.style.width = s+"px";
//         if(s > 150) {
//         clearInterval(x);
//         }
//     }    
// },1000);


//---------------------------------------------------------------------



//-----------------------------main--------------------------
// ----------------------------main -------------------------
console.log(outterMP3);
console.log(playButton);
console.log(song);
console.log(songTitle);
console.log(progressBar);
console.log(songProgress);
