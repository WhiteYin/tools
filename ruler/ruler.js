window.onload = function () {
    var rulerUl = document.getElementById('ruler-ul');
    var num = document.getElementById('num');
    var ruler = document.getElementById('ruler');

    var offsetX = 0;
    var moveX = 0;
    var moveBefore = 0;
    var unit = 0.64;

    ruler.addEventListener('touchstart', function (event) {
        offsetX = event.touches[0].clientX;
        moveBefore = 0;
    });

    rulerUl.addEventListener('touchmove', function (event) {
        var move = event.touches[0].clientX;
        var offset = ruler.dataset.offset;
        var tempMove = 0;
        offset = parseFloat(offset);
        var len = 0;
        tempMove = move - offsetX;
        tempMove /= 10;
        len = offset + (tempMove - moveBefore);
        len = parseFloat(len);
        if (len - 0.0 < 0 && len>-65) {
            moveX = tempMove;
            ruler.dataset.offset = len;
            moveBefore = moveX;
            ruler.style = "transform: translateX(" + len + "rem)";
            num.innerText = -((len / unit).toFixed(2));
        }
    }, false);
}