﻿$(function () {
    
    var boundary = 101;
    var allottedTime = 30;

    $('#btnAddition').click(function () {
        setUpEquation('a');
    });

    $('#btnSubtraction').click(function () {
        setUpEquation('s');
    });

    $('#btnMultiplication').click(function () {
        setUpEquation('m');
    });

    $('#btnDivision').click(function () {
        setUpEquation('d');
    });

    $('#resume_link').click(function () {
        window.location.replace("/Resume/Index");
    });

    $('#btnSubmitAnswer').on("click", function () {
        var submitStatus = $('#txtSubmitStatus').val();
        
        //Eliminate duplicated code execution
        if (Number(submitStatus) == 0) {
            arithmetic_handle();
            $('#txtNumbersGenerated').val('0');
        }
    });

    $('#btnResetGame').mouseenter(function () {
        $('#resetShortcut').show();
    }).mouseleave(function () {
        $('#resetShortcut').hide();
    });

    $('#linked-in-btn').click(function () { navigateToLinkedIn(); });

    $('#hobbies-btn').click(function () {
        location.href = '/Interesting_Info/Hobbies';
    });

    $('#arithmeticGame').click(function () {
        window.location.replace('/MathChallenge/HandleInformation');
    });

    $('#startFishGame').click(function () {
        gameActionFish(0, 50);
    });
    $('#arithmeticBodyId').keydown(function (e) {
        if (e.altKey && e.keyCode == 49) {
            $('#btnL1').trigger("click");
        }
    });
    $('#startBalloonGame').click(function () {
        gameActionBalloon();
    });

    $('#btnL1').on("click", function () {
        $('#levelSelected').val("1");
        $('#txtBoundary').val(101);
        $('#txtMin').val(1);
        levelButtonActions();
        gameCounter();
    });
    $('#btnL2').on("click", function () {
        $('#levelSelected').val('2');
        $('#txtBoundary').val(1001);
        $('#txtMin').val(10);
        levelButtonActions();
        gameCounter();
    });
    $('#btnL3').on("click", function () {
        $('#levelSelected').val('3');
        $('#txtBoundary').val(10001);
        $('#txtMin').val(100);
        levelButtonActions();
        gameCounter();
    });

    $('#arithmeticBodyId').keydown(function (e) {
        if (e.altKey && e.keyCode == 49) {
            $('#btnL1').trigger("click");
        }
    });
    $('#arithmeticBodyId').keydown(function (e) {
        if (e.altKey && e.keyCode == 50) {
            $('#btnL2').trigger("click");
        }
    });
    $('#arithmeticBodyId').keydown(function (e) {
        if (e.altKey && e.keyCode == 51) {
            $('#btnL3').trigger("click");
        }
    });
    $('#arithmeticBodyId').keydown(function (e) {
        if (e.altKey && e.keyCode == 187) {
            setUpEquation('a');
        }
    });
    $('#arithmeticBodyId').keydown(function (e) {
        if (e.altKey && e.keyCode == 189) {
            setUpEquation('s');
        }
    });
    $('#arithmeticBodyId').keydown(function (e) {
        if (e.altKey && e.keyCode == 88) {
            setUpEquation('m');
        }
    });
    $('#arithmeticBodyId').keydown(function (e) {
        if (e.altKey && e.keyCode == 191) {
            setUpEquation('d');
        }
    });
    $('#arithmeticBodyId').keydown(function (e) {
        if (e.ctrlKey && e.keyCode == 114) {
            $('#btnResetGame').trigger("click");
        }
    });

    var instructionVisible = false;
    $('#showLevelInstructions').click(function () {
        if (instructionVisible) {
            $('#levelSelectionInstructions').hide(500);
            $('#showLevelInstructions').html("Show Level Selection Instructions");
            instructionVisible = false;
        }
        else {
            $('#levelSelectionInstructions').show(500);
            $('#showLevelInstructions').html("Hide Level Selection Instructions");
            document.getElementById('levelSelectionInstructions').style.margin = "0 auto !important";
            document.getElementById('levelSelectionInstructions').style.float = "none !important";
            instructionVisible = true;
        }
    });

    var gamePlayInstructionVisible = false;
    $('#gameInstructions').click(function () {
        if (gamePlayInstructionVisible) {
            $('#gamePlayInstructions').hide(250);
            $('#gameInstructions').html("Show Game Play Instructions");
            gamePlayInstructionVisible = false;
        }
        else {
            $('#gamePlayInstructions').show(500);
            $('#gameInstructions').html("Hide Game Play Instructions");
            document.getElementById('gamePlayInstructions').style.margin = "0 auto !important";
            document.getElementById('gamePlayInstructions').style.float = "none !important";
            gamePlayInstructionVisible = true;
        }
    });

    var keyBoardShortcutsVisible = false;
    var keyBoardShortcutString = "KeyBoard Shortcuts";
    $('#btnKeyBoardShortcuts').click(function () {
        
        if (keyBoardShortcutsVisible) {
            $('#keyBoardShortcutTable').hide(500);
            $('#btnKeyBoardShortcuts').html('Show KeyBoard Shortcuts');
            keyBoardShortcutsVisible = false;
        }
        else {
            $('#keyBoardShortcutTable').show(500);
            $('#btnKeyBoardShortcuts').html('Hide KeyBoard Shortcuts');
            document.getElementById('keyBoardShortcutTable').style.margin = "0 auto !important";
            document.getElementById('keyBoardShortcutTable').style.float = "none !important";
            keyBoardShortcutsVisible = true;
        }
    });

    $('#btnResetGame').click(function () {
        window.location.replace('/MathChallenge/HandleInformation');
        $('resetStatusMessage').innerHTML = 'Game successfully reset';
    });

    $('#answer').keydown(function (e) {
        if (e.keyCode === 13) {
            var submitStatus = $('#txtSubmitStatus').val();

            //Eliminate duplicated code execution
            if (Number(submitStatus) == 0) {
                arithmetic_handle();
                $('#txtNumbersGenerated').val('0');
            }
        }
    });
});

//***function in progress to reduce duplicate code
function show_hideFormControls(boolValue, controlId, stringMessage) {
    if (keyBoardShortcutsVisible) {
        $('#' + controlId).hide(500);
        $('#btnKeyBoardShortcuts').html('Show ' + stringMessage);
        keyBoardShortcutsVisible = false;
    }
    else {
        $('#keyBoardShortcutTable').show(500);
        $('#btnKeyBoardShortcuts').html('Hide KeyBoard Shortcuts');
        document.getElementById('keyBoardShortcutTable').style.margin = "0 auto !important";
        document.getElementById('keyBoardShortcutTable').style.float = "none !important";
        keyBoardShortcutsVisible = true;
    }
}