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
        clearModeButtonErrors();
        $('#txtBoundary').val(101);
        $('#numbersGenerated').val('0');
    });
    $('#btnL2').on("click", function () {
        $('#levelSelected').val('2');
        clearModeButtonErrors();
        $('#txtBoundary').val(1001);
        $('#numbersGenerated').val('0');
    });
    $('#btnL3').on("click", function () {
        $('#levelSelected').val('3');
        clearModeButtonErrors();
        $('#txtBoundary').val(10001);
        $('#numbersGenerated').val('0');
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
});