function setUpEquation(mode) {
    $('#submitStatus').val('0');
    $('#attempts').val('0');
    document.getElementById('btnSubmitAnswer').disabled = false;
    document.getElementById('answer').focus();

    //Set id's for controls to be updated with values a & b
    var number1 = 'num1';
    var number2 = 'num2';
    var levelDifficulty = getDifficultyLevel();
    var numbersGenerated = $('#numbersGenerated').val();

    //Generate two numbers, calculate and store the outcome according to calculation mode selected
    if (levelDifficulty != 0) {
        if (numbersGenerated != '1') {
            generateTwoNums(mode, number1, number2);
        }
    }
    else {
        $('#mode_update').html('Please select a difficulty level first.');
    }
}

function getDifficultyLevel() {
    var level = $('#levelSelected').val();
    return Number(level);
}

function generateTwoNums(mode, num1, num2) {

    var upperNumberBound = $('#txtBoundary').val();
    var lowerNumberBound = $('#txtMin').val();
    $('#txt-mode').val(mode);
    $('#answer').val('');
    $('#result-message').html('');

    var number1 = Math.floor((Math.random() * (upperNumberBound - lowerNumberBound)) + 1);

    var number2 = Math.floor((Math.random() * (upperNumberBound - lowerNumberBound)) + 1);

    if (number2 > number1) {
        var temp = number1;
        number1 = number2;
        number2 = temp;
    }

    $('#txtNum1').val(number1);
    $('#txtNum2').val(number2);

    if (mode == 'a') { 
        mode_feedback.addition();
    }
    else if (mode == 's') { 
        mode_feedback.subtraction();
    }
    else if (mode == 'm') { 
        mode_feedback.multiplication(); 
    }
    else if (mode == 'd') { 
        mode_feedback.division();
        $('#result-message').html("Round to three decimal places.");
    }

    print(mode, number1, number2, num1, num2);

    $('#numbersGenerated').val('1');
}

var mode_feedback = {

    "addition": function () {
        $('#selectedModeFeedback').html('Addition Selected');
    },
    "subtraction": function () {
        $('#selectedModeFeedback').html('Subtraction Selected');
    },
    "multiplication": function () {
        $('#selectedModeFeedback').html('Multiplication Selected');
    },
    "division": function () {
        $('#selectedModeFeedback').html('Division Selected');
    }
}

var counter = 0;
function print(mode, number1, number2, num1, num2) {
    var length1 = number1.toString().length;
    var length2 = number2.toString().length;
    var strLength1 = 0;
    var printStr = '';

    if (length1 == 1) { $('#' + num1).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + number1); }
    else if (length1 == 2) { $('#' + num1).html('&nbsp;&nbsp;&nbsp;&nbsp;' + number1); }
    else if (length1 == 3) { $('#' + num1).html("&nbsp;&nbsp;" + number1); }
    else if (length1 == 4) { $('#' + num1).html(number1); }

    printStr = '';
    if (length2 == 1) { $('#' + num2).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + number2); }
    else if (length2 == 2) { $('#' + num2).html('&nbsp;&nbsp;&nbsp;&nbsp;' + number2); }
    else if (length2 == 3) { $('#' + num2).html("&nbsp;&nbsp;" + number2); }
    else if (length2 == 4) { $('#' + num2).html(number2); }
    
    $('#arithmeticSign').html(sign.getSign(mode));
}

var sign = {

    "getSign": function(mode){
        if (mode == 'a') { return '+'; }
        else if (mode == 's') { return '--'; }
        else if (mode == 'm') { return 'x'; }
        else if (mode == 'd') { return '/'; }
    }
}

function add_lead(num_length, position) {
    var lead = '';
    var counter = (position == 'top') ? (num_length % 2) + 1 : (num_length % 2);
    var i = 0;
    for (i; i < counter; i++) {
        lead += ' ';
    }
    return lead;
}

var arithmetic_calc = {
    
    "addition": function (num1, num2) {
        return (parseInt(num1) + parseInt(num2));
    },
    "subtraction": function (num1, num2) {
        return (parseInt(num1) - parseInt(num2));
    },
    "multiplication": function (num1, num2) {
        return parseInt(num1) * parseInt(num2);
    },
    "division": function (num1, num2) {
        return Math.round(parseInt(num1) / parseInt(num2) * 1000) / 1000;
    }
};

function arithmetic_handle() {
    var mode = $('#txt-mode').val();
    var num1 = $('#txtNum1').val();
    var num2 = $('#txtNum2').val();
    var result = parseInt(0);

    switch (mode) {
        case "a": result = arithmetic_calc.addition(num1, num2);
            break;
        case "s": result = arithmetic_calc.subtraction(num1, num2);
            break;
        case "m": result = arithmetic_calc.multiplication(num1, num2);
            break;
        case "d": result = arithmetic_calc.division(num1, num2);
            break;
        default:
            break;
    }

    $('#correct-answer').val(result);

    check_answer();

    
}

function check_answer() {
    var correct = $('#correct-answer').val();
    var submitted = '';

    if ($('#txt-mode').val() == 'd') {
        submitted = parseFloat($('#answer').val());
    }
    else { submitted = $('#answer').val(); }

    if (correct == '') {
        $('#result-message').html('Please select a mode.');
        return;
    }

    else if (submitted == '') {
        $('#result-message').html('Please select an operation <strong>AND</strong> enter an answer to be checked.');
    }

    else if (correct == submitted) {
        performScoreIncrease();
        $('#result-message').html('Congratulations, you are correct!  :)');
        document.getElementById('btnSubmitAnswer').focus();
        $('#mobileScoreUpdate').html('<strong>Current Score: ' + $('#txtScore').val() + '</strong>');
        $('#submitStatus').val(1);
    }

    else {
        $('#result-message').html('Sorry, that is incorrect.  :(');

        var attempts = $('#attempts').val();
        attempts = Number(attempts) + Number(1);
        $('#attempts').val(attempts);
        if (attempts >= 8) {  //for some reason this is hit twice. 8 is actually 4 here
            alert('The correct answer is ' + $('#correct-answer').val());

            $('#result-message').html("Please select an operation to continue");

            var score = Number($('#txtScore').val());

            if (score > Number(5)) {
                score = score -= 5;
                $('#txtScore').val(score);
            }
            document.getElementById('btnSubmitAnswer').disabled = true;
        }
    }
}

function performScoreIncrease() {
    var currentScore = Number($('#txtScore').val());
    var scoreIncreaseMeasure = getModeCalculation();
    $('#txtScore').val(currentScore += scoreIncreaseMeasure);
}

function getModeCalculation() {
    var mode = $('#txt-mode').val();

    if (mode == 'a' || mode == 's') {  //Level 1: 10 pts, Level 2: 80 pts, Level 3: 120 pts
        return 10 * getLevelCoefficient();
    }
    else if (mode == 'm') {  //Level 1: 40 pts, Level 2: 320 pts, Level 3: 480 pts
        return 100 * getLevelCoefficient();
    }
    else if (mode == 'd') {  //Level 1: 50 pts, Level 2: 400 pts, Level 3: 600 pts
        return 200 * getLevelCoefficient();
    }
}

function getLevelCoefficient() {
    var level = Number($('#levelSelected').val());

    if (level == 1) {
        return 1;
    }
    if (level == 2) {
        return 10;
    }
    if (level == 3) {
        return 15;
    }
}


function gameCounter() {
    var count = 301;
    var minutes = Number(Math.floor(count / 60));
    var seconds = Number(Math.floor(count % 60));

    var counter = setInterval(decrement, 1000);

    function decrement() {
        seconds = seconds - 1;
        if (seconds < 0) {
            minutes = minutes - 1;
            seconds = 59;
        }

        $('#txtCountdown').val(minutes + " m : " + seconds + " s");

        if (minutes === 1 && seconds === 0) {
            alert("1 minute remaining");
        }

        if (minutes <= 0 && seconds <= 0) {
            clearInterval(counter);
            gameOver_DisableAll();
            return;
        }
    }
}

function gameCounterStop() {
    clearInterval(counter);
    $('#txtCountdown').val('');
    return;
}

function setLevelSelectionsStatus(assignBoolean) {
    document.getElementById('btnL1').disabled = assignBoolean;
    document.getElementById('btnL2').disabled = assignBoolean;
    document.getElementById('btnL3').disabled = assignBoolean;
}

function levelButtonActions() {
    clearModeButtonErrors();
    $('#numbersGenerated').val('0');
    $('resetStatusMessage').innerHTML = '';
    setLevelSelectionsStatus(true);
}

function clearModeButtonErrors() {
    clearMessages();
    arithmeticButtonsStatus(false);
    $('#attempts').val('0');
    $('#txtScore').val('0');
    $('#txtCountdown').val('');
}

function clearMessages() {
    $('#mode_a').html('');
    $('#mode_s').html('');
    $('#mode_m').html('');
    $('#mode_d').html('');
    $('#mode_update').html('');
}

function gameOver_DisableAll() {
    clearMessages();
    arithmeticButtonsStatus(true);
    setLevelSelectionsStatus(true);
    $('#result-message').html('Game Over!  Your score: ' + $('#txtScore').val());
}

function arithmeticButtonsStatus(arithButtonStatus) {
    document.getElementById('btnAddition').disabled = arithButtonStatus;
    document.getElementById('btnSubtraction').disabled = arithButtonStatus;
    document.getElementById('btnMultiplication').disabled = arithButtonStatus;
    document.getElementById('btnDivision').disabled = arithButtonStatus;
    document.getElementById('btnSubmitAnswer').disabled = arithButtonStatus;
}