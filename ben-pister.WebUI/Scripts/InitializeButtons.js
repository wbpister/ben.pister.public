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

    $('#resetGame').click(function () {
        window.location.replace('/InformationEntry/HandleInformation');
        //setLevelSelectionsStatus(false);
        //clearModeButtonErrors();
        //gameCounterStop();
        $('resetStatusMessage').innerHTML = 'Game successfully reset';
    });
});