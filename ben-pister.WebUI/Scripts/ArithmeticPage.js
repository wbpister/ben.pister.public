function generateTwoNums(mode, num1, num2) {
    $('#txt-mode').val(mode);
    $('#answer').val('');
    $('#result-message').html('');

    var number1 = Math.floor((Math.random() * 100) + 1);
    $('#' + num1).val(number1);

    var number2 = Math.floor((Math.random() * 100) + 1);
    $('#' + num2).val(number2);
}

var talley = parseInt(0);
var arithmetic_calc = {
    
    "addition": function (num1, num2) {
        talley = (parseInt(num1) + parseInt(num2));
        return talley;
    },
    "subtraction": function (num1, num2) {
        talley = (parseInt(numb1) - parseInt(numb2));
        return talley;
    },
    "multiplication": function (num1, num2) {
        talley = parseInt(num1) * parseInt(num2);
        return talley;
    },
    "division": function (num1, num2) {
        talley = Math.round(parseInt(num1) / parseInt(num2) * 1000) / 1000;
        return talley;
    }
};

function arithmetic_handle() {
    var mode = $('#txt-mode').val();
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();
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