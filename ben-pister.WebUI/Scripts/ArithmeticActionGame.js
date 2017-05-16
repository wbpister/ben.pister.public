

function pieces(value1, value2) {
    var count = 0;

    this.val1 = 12;
    this.val2 = 42;
    this.x = value1;
    this.y = value2;
    this.id = "sf" + count;
    this.image = "/ImagesGame/small_fish.png";
    
    $('#txtAnswer').html(parseInt(value1) + parseInt(value2));
    gameAction();
    gameActionFish(this);
    
}

function gameAction() {
    $('#sf' + 0).click(function () {
        $('#answer_input').focus();
    });


}

function gameActionFish(piece) {
    var fishCanvas = document.getElementById('fishCanvas');
    

    var ctx = fishCanvas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 1100, 700)
    if (x < 1000) {
        //var piece = new pieces(12, 42);
        var img = new Image();
        var img2 = new Image();
        img.onload = function () {
            //ctx.drawImage(img, x, y);
            ctx.font = '16pt Times';
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'red';
            //ctx.strokeText('124 X 37', x + 55, y + 70);

            ctx.drawImage(img2, piece.x, piece.y + 320); //length of small_fish is 140px
            ctx.strokeText(piece.val1 + '+' + piece.val2, piece.x + 35, piece.y + 370);
        }
        img.src = '/ImagesGame/shark.png';
        img2.src = piece.image;

        ctx.restore();
    }
    piece.x += 1;
    var loopTimer = setTimeout('gameActionFish(' + piece + ')', 50);
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