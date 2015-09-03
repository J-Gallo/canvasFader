function fadeOut(text, color, size, posX, posY, font ) {
    var c = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        interval,
        alpha = 1
    ctx.font= size + "px " + font;
    var width = ctx.measureText(text)

    console.log(width);
    interval = setInterval(function () {
        ctx.clearRect(posX,posY + 1,width.width, - size / 1.2);

        ctx.fillStyle = hexToRgb(color)+ alpha + ')';
        ctx.fillText(text, posX, posY);
        alpha = alpha - 0.03;
        if (alpha < 0) {
            clearInterval(interval);
            ctx.clearRect(0,0,c.width,c.height);
        }
    }, 50);
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return 'rgba(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ',';
}

