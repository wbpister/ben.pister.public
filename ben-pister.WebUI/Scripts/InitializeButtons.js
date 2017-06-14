$(function () {
    
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
        var submitStatus = $('#submitStatus').val();
        
        //Eliminate duplicated code execution
        if (Number(submitStatus) == 0) {
            arithmetic_handle();
            $('#numbersGenerated').val('0');
        }
    });

    $('#btnAddition').mouseenter(function () {
        $('#btnAddition').attr("style", "color:yellow");
        $('#addShortcut').show();
    }).mouseleave(function () {
        $('#btnAddition').attr("style", "color:white");
        $('#addShortcut').hide();
    });

    $('#btnSubtraction').mouseenter(function () {
        $('#btnSubtraction').attr("style", "color:yellow");
        $('#subtractShortcut').show();
    }).mouseleave(function () {
        $('#btnSubtraction').attr("style", "color:white");
        $('#subtractShortcut').hide();
    });

    $('#btnMultiplication').mouseenter(function () {
        $('#btnMultiplication').attr("style", "color:yellow");
        $('#multiplyShortcut').show();
    }).mouseleave(function () {
        $('#btnMultiplication').attr("style", "color:white");
        $('#multiplyShortcut').hide();
    });

    $('#btnDivision').mouseenter(function () {
        $('#btnDivision').attr("style", "color:yellow");
        $('#divideShortcut').show();
    }).mouseleave(function () {
        $('#btnDivision').attr("style", "color:white");
        $('#divideShortcut').hide();
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
        window.location.replace('/InformationEntry/HandleInformation');
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
            document.getElementById('levelSelectionInstructions').style.display = "none";
            $('#showLevelInstructions').html("Show Level Selection Instructions");
            instructionVisible = false;
        }
        else {
            document.getElementById('levelSelectionInstructions').style.display = "inline";
            $('#showLevelInstructions').html("Hide Level Selection Instructions");
            document.getElementById('levelSelectionInstructions').style.margin = "0 auto !important";
            document.getElementById('levelSelectionInstructions').style.float = "none !important";
            instructionVisible = true;
        }
    });

    var gamePlayInstructionVisible = false;
    $('#gameInstructions').click(function () {
        if (gamePlayInstructionVisible) {
            document.getElementById('gamePlayInstructions').style.display = "none";
            $('#gameInstructions').html("Show Game Play Instructions");
            gamePlayInstructionVisible = false;
        }
        else {
            document.getElementById('gamePlayInstructions').style.display = "inline";
            $('#gameInstructions').html("Hide Game Play Instructions");
            document.getElementById('gamePlayInstructions').style.margin = "0 auto !important";
            document.getElementById('gamePlayInstructions').style.float = "none !important";
            gamePlayInstructionVisible = true;
        }
    });

    var keyBoardShortcutsVisible = false;
    $('#btnKeyBoardShortcuts').click(function () {
        if (keyBoardShortcutsVisible) {
            document.getElementById('keyBoardShortcutTable').style.display = "none";
            $('#btnKeyBoardShortcuts').html('Show KeyBoard Shortcuts');
            keyBoardShortcutsVisible = false;
        }
        else {
            document.getElementById('keyBoardShortcutTable').style.display = "inline";
            $('#btnKeyBoardShortcuts').html('Hide KeyBoard Shortcuts');
            document.getElementById('keyBoardShortcutTable').style.margin = "0 auto !important";
            document.getElementById('keyBoardShortcutTable').style.float = "none !important";
            keyBoardShortcutsVisible = true;
        }
    });

    $('#btnResetGame').click(function () {
        window.location.replace('/InformationEntry/HandleInformation');
        $('resetStatusMessage').innerHTML = 'Game successfully reset';
    });

    $('#answer').keydown(function (e) {
        if (e.keyCode === 13) {
            var submitStatus = $('#submitStatus').val();

            //Eliminate duplicated code execution
            if (Number(submitStatus) == 0) {
                arithmetic_handle();
                $('#numbersGenerated').val('0');
            }
        }
    });
});