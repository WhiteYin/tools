window.onload = function () {
    var time = 0;
    var text = document.getElementById('progress-num');
    var timer = function () {
        
        time += 1;
        text.innerText = (time % 100)+'%';
        window.setTimeout(timer, 100);
    };
    timer();
}