$(function () {
    var number1 = 'num1';
    var number2 = 'num2';
    var boundary = 101;
    var allottedTime = 30;

    $('#btnAddition').click(function () { generateTwoNums('a', number1, number2) });

    $('#btnSubtraction').click(function () { generateTwoNums('s', number1, number2) });

    $('#btnMultiplication').click(function () { generateTwoNums('m', number1, number2) });

    $('#btnDivision').click(function () { generateTwoNums('d', number1, number2) });

    $('#resume_link').click(function () {
        window.location.replace("/Resume/Index");
    });

    $('#btnSubmitAnswer').click(function () { arithmetic_handle(); });

    $('#linked-in-btn').click(function () { navigateToLinkedIn(); });

    $('#hobbies-btn').click(function () {
        location.href = '/Interesting_Info/Hobbies';
    });

    $('#arithmeticGame').click(function () {
        window.location.replace('/MathGame/Fish');
    });

    $('#startFishGame').click(function () {
        gameActionFish(0, 50);
        document.getElementById('startFishGame').disabled = true;
    });

    $('#startBalloonGame').click(function () {
        gameActionBalloon();
    });
});