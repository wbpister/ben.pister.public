

var shown = true;
function display_document_view(docId, linkId) {

    if (!shown) {
        jQuery('#' + linkId).html('View Resume');
        document.getElementById(docId).innerHTML = ''
        jQuery('#' + docId).hide(250);
        shown = true;
    }
    else if(shown) {
        jQuery('#' + linkId).html('Close Resume');
        document.getElementById(docId).innerHTML = '<embed src="Doc_Resources/Ben_Pisters_Resume.pdf" type="application/pdf" width="600" height="800"/>';
        jQuery('#' + docId).show(250);
        shown = false;
    }
}

var arithmetic_calc = {

    //Add
    "addition": function (num1, num2) {
        return (parseInt(num1) + parseInt(num2));
    },
    "subtraction": function (num1, num2) {
        return (parseInt(num1) - parseInt(num2));
    },
    "multiplication": function () {
        return (parseInt(num1) * parseInt(num2));
    },
    "division": function (num1, num2) {
        return (parseInt(num1) / parseInt(num2));
    }
};

function arithmetic_handle() {
    var mode = document.getElementById("txt-mode").value;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = 0;

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

    jQuery('#correct-answer').val(result);

    check_answer();
}
//Pick up here
function generateTwoNums(mode, num1, num2) {
    document.getElementById("txt-mode").value = mode;
    document.getElementById("answer").value = '';

    var number1 = Math.floor((Math.random() * 100) + 1);
    document.getElementById(num1).value = number1;
    //jQuery('#' + num1).val(number1);

    var number2 = Math.floor((Math.random() * 100) + 1);
    document.getElementById(num2).value = number2;
    //jQuery('#' + num2).val(number2);
}

function check_answer() {
    var correct = document.getElementById("correct-answer").value;
    var submitted = parseInt(document.getElementById("answer").value);

    if (correct == submitted){
        jQuery('#result-message').html('Congratulations, you are correct!  :)');
    }

    else {
        jQuery('#result-message').html('Sorry, that is incorrect.  :(');
    }
}