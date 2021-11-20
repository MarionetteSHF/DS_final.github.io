var index = 0;
var imgs = ["./js/images/image1.png", "./js/images/image2.png", "./js/images/image3.png",
    "./js/images/image4.png", "./js/images/image5.png", "./js/images/image6.png"
    , "./js/images/image7.png"
    , "./js/images/image8.png"];

var t = 1200;
var set1 = setInterval("qiehuan()", t);


function qiehuan() {
    document.getElementById("img").src = imgs[index];
    // t -= 80;
    index++;
    // if (t < 500) {
    //     t = 500;
    // }
    if (index > 7) {
        index = 0;


        // clearInterval(set1);
        // return;
    }
    clearInterval(set1);

    set1 = setInterval("qiehuan()", t);
}



var button = document.querySelectorAll('.button')
var audio = new Audio("./js/gentle.mp3");
var video = document.getElementById("myaudio");
var video2 = document.getElementById("video2");
for (bu of button) {
    bu.addEventListener('click', function (e) {

        var question = document.querySelector('#question');
        question.remove();
        audio.play();


    })
}


video.addEventListener('onStateChange', function (e) {
    audio.pause();
    // video.remove();
    // audio.play()
    // if (video.paused) {
    //     audio.pause();
    // }
})

video2.addEventListener('click', function (e) {

    audio.play()
    if (video2.paused) {
        audio.pause();
    }
})
// setInterval(function toggleSound() {

//     if (music.paused) {

//         music.paused = false;
//         music.play();
//     }
// }, 5);



