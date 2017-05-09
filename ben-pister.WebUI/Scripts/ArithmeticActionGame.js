function gameActionFish(x, y) {
    var fishCanvas = document.getElementById('fishCanvas');

    var ctx = fishCanvas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 1100, 700)
    if (x < 1000) {
        var img = new Image();
        var imgTwo = new Image();
        img.onload = function () {
            //ctx.drawImage(img, x, y);
            ctx.font = '16pt Times';
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'red';
            //ctx.strokeText('124 X 37', x + 55, y + 70);

            ctx.drawImage(imgTwo, x, y + 320); //length of small_fish is 140px
            ctx.strokeText('12 + 42', x + 35, y + 370);
        }
        img.src = '/ImagesGame/shark.png';
        imgTwo.src = '/ImagesGame/small_fish.png';

        ctx.restore();
    }
    x += 2;
    var loopTimer = setTimeout('gameActionFish(' + x + ',' + y + ')', 30);
}

function gameActionBalloon() {
    var balloonCanvas = document.getElementById('balloonCanvas');

    var ctx = balloonCanvas.getContext('2d');
    var x = 50;
    var y = 50;

    var img = new Image();
    var imgTwo = new Image();
    img.onload = function () {
        ctx.drawImage(img, x, y);
        ctx.font = '16pt Times';
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';
        ctx.strokeText('124X37', x, y + 50);

        ctx.drawImage(imgTwo, x + 200, y + 320);
        ctx.strokeText('12+42', x + 200, y + 360);
    }
    img.src = '/ImagesGame/orange_balloon.png';
    imgTwo.src = '/ImagesGame/green_balloon.png';
}