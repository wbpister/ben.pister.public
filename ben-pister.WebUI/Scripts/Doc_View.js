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

var arithmetic_calc = (function () {

    //Add
    var addition = function (num1, num2) {
        return (num1 + numb2);
    };
    var subtraction = function (num1, num2) {
        return (num1 - num2);
    };
    var multiplication = function () {
        return (num1 * num2);
    };
    var division = function (num1, num2) {
        return (num1 / num2);
    };
}());

function arithmetic_handle() {
    var mode = jQuery('#txt-mode').html();
    var num1 = jQuery('#num1').html();
    var num2 = jQuery('#num2').html();

    switch (mode) {
        case "a": arithmetic_calc.addition(num1, num2);
            break;
        case "s": arithmetic_calc.subtraction(num1, num2);
            break;
        case "m": arithmetic_calc.multiplication(num1, num2);
            break;
        case "d": arithmetic_calc.division(num1, num2);
            break;
        default:
            break;
    }
}
//Pick up here
function generateTwoNums(mode, num1, num2) {
    jQuery('#txt-mode').html(mode);

    var number1 = Math.floor((Math.random() * 100) + 1);
    jQuery('#' + num1).html(number1);

    var number2 = Math.floor((Math.random() * 100) + 1);
    jQuery('#' + num2).html(number2);
}