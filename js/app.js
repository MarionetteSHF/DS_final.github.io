var index = 0;
var imgs = ["./js/images/images1.png", "./js/images/images2.png", "./js/images/images3.png",
    "./js/images/images4.png", "./js/images/images5.png", "./js/images/images6.png"
    , "./js/images/images7.png"
    , "./js/images/images8.png"];

var t = 1200;
var set1 = setInterval("qiehuan()", t);


function qiehuan() {
    document.getElementById("img").src = imgs[index];
    t -= 80;
    index++;
    if (t < 500) {
        t = 500;
    }
    if (index > 7) {
        // index = 0;


        clearInterval(set1);
        return;
    }
    clearInterval(set1);

    set1 = setInterval("qiehuan()", t);
}



var button = document.querySelectorAll('.button')
var audio = new Audio("./js/gentle.mp3");
var video = document.getElementById("myaudio");

for (bu of button) {
    bu.addEventListener('click', function (e) {

        var question = document.querySelector('#question');
        question.remove();
        audio.play();


    })
}


video.addEventListener('click', function (e) {

    audio.play()
    if (video.paused) {
        audio.pause();
    }
})
// setInterval(function toggleSound() {

//     if (music.paused) {

//         music.paused = false;
//         music.play();
//     }
// }, 5);



