function fadeOut(text, color, size, posX, posY, font ) {
    var c = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        interval,
        alpha = 1,
        width = ctx.measureText(text)

    ctx.font="80px Arial";

    console.log(ctx.font);

    interval = setInterval(function () {
        ctx.clearRect(posX,posY,posX + width,c.height);
        ctx.fillStyle = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + alpha + ')';
        ctx.fillText(text, c.width / 2, c.height / 2);
        alpha = alpha - 0.03;
        if (alpha < 0) {
            clearInterval(interval);
            ctx.clearRect(0,0,c.width,c.height);
        }
    }, 50);
};
