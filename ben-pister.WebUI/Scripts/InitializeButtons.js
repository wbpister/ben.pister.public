﻿$(function () {
    var number1 = 'num1';
    var number2 = 'num2';

    $('#btnAddition').click(function () { generateTwoNums('a', number1, number2) });

    $('#btnSubtraction').click(function () { generateTwoNums('s', number1, number2) });

    $('#btnMultiplication').click(function () { generateTwoNums('m', number1, number2) });

    $('#btnDivision').click(function () { generateTwoNums('d', number1, number2) });

    $('#resume_link').click(function () { display_document_view('resume_window', 'resume_link'); });

    $('#btnSubmitAnswer').click(function () { arithmetic_handle(); })
});