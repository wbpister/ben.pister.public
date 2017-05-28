﻿function setUpEquation(mode) {
    $('#submitStatus').val('0');
    $('#attempts').val('0');
    document.getElementById('btnSubmitAnswer').disabled = false;

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
        $('#mode_' + mode).html('Please select a difficulty level first.');
    }
}

function getDifficultyLevel() {
    var level = $('#levelSelected').val();
    return Number(level);
}

function clearModeButtonErrors() {
    $('#mode_a').html('');
    $('#mode_s').html('');
    $('#mode_m').html('');
    $('#mode_d').html('');
    $('#attempts').val('0');
    document.getElementById('btnSubmitAnswer').disabled = false;
}

function generateTwoNums(mode, num1, num2) {

    var upperNumberBound = $('#txtBoundary').val();
    $('#txt-mode').val(mode);
    $('#answer').val('');
    $('#result-message').html('');

    var number1 = Math.floor((Math.random() * upperNumberBound) + 1);
    $('#txtNum1').val(number1);

    var number2 = Math.floor((Math.random() * upperNumberBound) + 1);
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

    if (length1 == 1) { $('#' + num1).html('&nbsp;&nbsp;&nbsp;&nbsp;' + number1); }
    else if (length1 == 2) { $('#' + num1).html('&nbsp;&nbsp;' + number1); }
    else if (length1 == 3) { $('#' + num1).html(number1); }
    else if (length1 == 4) { $('#' + num1).html(number1); }

    printStr = '';
    if (length2 == 1) { $('#' + num2).html('&nbsp;&nbsp;&nbsp;&nbsp;' + number2); }
    else if (length2 == 2) { $('#' + num2).html('&nbsp;&nbsp;' + number2); }
    else if (length2 == 3) { $('#' + num2).html(number2); }
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
        $('#result-message').html('Please select an operation and enter an answer to be checked.');
    }

    else if (correct == submitted) {
        $('#result-message').html('Congratulations, you are correct!  :)');
        performScoreIncrease();
        $('#submitStatus').val(1);
    }

    else {
        $('#result-message').html('Sorry, that is incorrect.  :(');

        var attempts = $('#attempts').val();
        attempts = Number(attempts) + Number(1);
        $('#attempts').val(attempts);
        if (attempts >= 8) {
            alert('The correct answer is ' + $('#correct-answer').val());

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

    if (mode == 'a' || mode == 's') {  //Level 1: 10 pts, Level 2: 15 pts, Level 3: 20 pts
        return 10 * getLevelCoefficient();
    }
    else if (mode == 'm') {  //Level 1: 20 pts, Level 2: 30 pts, Level 3: 40 pts
        return 40 * getLevelCoefficient();
    }
    else if (mode == 'd') {  //Level 1: 30 pts, Level 2: 45 pts, Level 3: 60 pts
        return 50 * getLevelCoefficient();
    }
}

function getLevelCoefficient() {
    var level = Number($('#levelSelected').val());

    if (level == 1) {
        return 1;
    }
    if (level == 2) {
        return 7;
    }
    if (level == 3) {
        return 12;
    }
}