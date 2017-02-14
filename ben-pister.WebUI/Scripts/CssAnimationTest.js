var isShown = false;
function showMeNow() {
    //$('#my-tester-button').click(function () {
        //var elementInQuestion = document.getElementById("show-me");

        if ($('#show-me').is(":visible")) {
            $('#show-me').fadeOut(1000);
        }
        else {
            $('#show-me').fadeIn(1000);
        }

        //if ($('#show-me').is(":visible")) {
        //    $('#show-me').fadeOut(1000);
        //    return;
        //}
        //else {
        //    $('#show-me').fadeIn(1000);
        //    return;
        //}

        //if (elementInQuestion.classList.contains("show-me")) {
        //    $('#show-me').delay(3000).removeClass("hidden");//.removeClass("show-me").addClass("show-me-out");
        //    return;
        //}
        //else {
        //    $("#show-me").delay(3000).addClass("hidden");//.addClass("show-me").removeClass("show-me-out");
        //    return;
        //}
    //});
}