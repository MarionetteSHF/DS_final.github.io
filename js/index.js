var content = "A few days ago, our team member Huili Zheng experienced a school bus delay, which caused her to be late for our first meeting and brought us cookies as an apology and her breakfast. However, no one eats the cookies during the three-hours meeting. This anecdote helped us realize: First, nobody likes to eat cookies for breakfast. Second, We all experienced a lot of school bus delays. What’s behind the delays? ";
var count = 0;
var text = document.querySelector('.text')
// var audio = document.querySelector('#myaudio');
var audio = new Audio("./js/typing.mp3");
var button = document.querySelector('#playbutton')
function wordbyword() {

    var paper = content.substr(0, count);
    text.innerHTML = paper;

    count++;
    if (count > content.length) {
        audio.pause();
        return;
    }
    setTimeout(wordbyword, 20);

}

button.addEventListener('click', function (e) {
    e.target.remove();
    audio.play();
    wordbyword();
    createrbutton();

});
const div = document.getElementById('div');
function createrbutton() {

    const b1 = document.createElement('button');
    const ref = document.createElement('a');
    ref.innerHTML = "Home";
    ref.href = "landing.html";

    ref.style.color = "#ffa260";
    ref.style.textDecoration = "none";
    // b1.style.width = "30px";
    // b1.style.height = "30px";
    // ref.style.fontSize = "0.2em";
    // div.style.height = "20vh";

    div.appendChild(b1);

    b1.appendChild(ref);

}

