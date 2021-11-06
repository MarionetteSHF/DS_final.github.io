var index = 0;
var imgs = ["./js/images/images1.png", "./js/images/images2.png", "./js/images/images3.png",
    "./js/images/images4.png", "./js/images/images5.png", "./js/images/images6.png"
    , "./js/images/images7.png"
    , "./js/images/images8.png"];

var t = 800;
var set1 = setInterval("qiehuan()", t);
function qiehuan() {
    document.getElementById("img").src = imgs[index];
    t -= 40;
    index++;
    if (t < 0) {
        t = 800;
    }
    if (index > 7) {
        index = 0;

    }
    clearInterval(set1);

    set1 = setInterval("qiehuan()", t);
}
// setInterval("qiehuan()", 1000);

var myAuto = document.getElementById('audio');
myAuto.play();





