function generateTwoNums(mode, num1, num2) {
    $('#txt-mode').val(mode);
    $('#answer').val('');
    $('#result-message').html('');

    var number1 = Math.floor((Math.random() * 1001) + 1);
    $('#txtNum1').val(number1);

    var number2 = Math.floor((Math.random() * 1001) + 1);
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
        mode_feedback.division; 
    }
    print(mode, number1, number2, num1, num2);
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

    //if (length1 == 0) { strLength1 = length1 + 6; }
    if (length1 == 1) { $('#' + num1).html('&nbsp;&nbsp;&nbsp;&nbsp;' + number1); }
    else if (length1 == 2) { $('#' + num1).html('&nbsp;&nbsp;' + number1); }
    else if (length1 == 3) { $('#' + num1).html(number1); }
    //printStr);

    printStr = '';
    //if (length2 == 0) { strLength2 = length2 + 6; }
    if (length2 == 1) { $('#' + num2).html('&nbsp;&nbsp;&nbsp;&nbsp;' + number2); }
    else if (length2 == 2) { $('#' + num2).html('&nbsp;&nbsp;' + number2); }
    else if (length2 == 3) { $('#' + num2).html(number2); }

    //var strLength2 = (number2.toString().length % 2) + 2;

    //for (counter; counter < strLength1; counter++) {
    //    printStr = printStr + '&nbsp;';
    //}
    
    counter = 0; 
    //printStr = printStr + sign.getSign(mode);

    //for (counter; counter < strLength2; counter++) {
    //    printStr = printStr + '&nbsp;';
    //}
    //$('#' + num2).html(printStr);

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
        $('#result-message').html('Please enter an answer to be checked.');
    }

    else if (correct == submitted) {
        $('#result-message').html('Congratulations, you are correct!  :)');
    }

    else {
        $('#result-message').html('Sorry, that is incorrect.  :(');
    }
}