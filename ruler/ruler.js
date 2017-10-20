window.onload = function () {
    var rulerUl = document.getElementById('ruler-ul');
    var num = document.getElementById('num');
    var ruler = document.getElementById('ruler');

    var offsetX = 0;
    var moveX = 0;
    var moveBefore = 0;
    var unit = 0.64;

    ruler.addEventListener('touchstart', function (event) {
        //手指按下时的坐标
        offsetX = event.touches[0].clientX;
        //初始化第一次滑动的距离为0
        moveBefore = 0;
    });

    rulerUl.addEventListener('touchmove', function (event) {
        //获取滑动时手指的动态坐标
        var move = event.touches[0].clientX;
        //上一次计算出的刻度尺移动距离
        var offset = ruler.dataset.offset;
        //原来是string，转换为float方便计算
        offset = parseFloat(offset);
        var tempMove = 0;
        var len = 0;
        //相对于手指按下时的距离，除以10是因为要将px转换为rem单位
        tempMove = move - offsetX;
        tempMove /= 10;
        //计算两次滑动间的距离
        len = offset + (tempMove - moveBefore);
        len = parseFloat(len);
        //边界判断，最大偏移长度65rem
        if (len - 0.0 < 0 && len > -65) {
            //将结果保存下来，下一次滑动时取出参与计算
            moveX = tempMove;
            ruler.dataset.offset = len;
            moveBefore = moveX;
            //设置样式
            ruler.style = "transform: translateX(" + len + "rem)";
            //显示刻度，保留2位小数
            num.innerText = -((len / unit).toFixed(2));
        }
    }, false);
}