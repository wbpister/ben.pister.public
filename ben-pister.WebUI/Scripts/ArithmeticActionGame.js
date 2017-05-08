function gameActionFish() {
    var fishCanvas = document.getElementById('fishCanvas');
    //fishCanvas.width = window.innerWidth;
    //fishCanvas.height = 600;

    var ctx = fishCanvas.getContext('2d');
    var x = 50;
    var y = 50;

    var img = new Image();
    var imgTwo = new Image();
    img.onload = function () {
        ctx.drawImage(img, x, y);
        ctx.font = '16pt Times';
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.strokeText('124 X 37', x + 55, y + 70);

        ctx.drawImage(imgTwo, x + 200, y + 320);
        ctx.strokeText('12 + 42', x + 235, y + 370);
    }
    img.src = '/ImagesGame/shark.png';
    imgTwo.src = '/ImagesGame/small_fish.png';
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