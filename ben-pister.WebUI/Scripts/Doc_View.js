

var shown = false;
function display_document_view(docId, linkId) {

    // Only send to google analytics when View Resume Clicked
    if (!shown) {
        $('#' + linkId).html('Close Resume');
        $('#embed-resume').attr('style', 'display:block').show(250);
        shown = true;
    }
    else if (shown) {
        ga('send', 'view', 'Resume', 'view-only', 'Resume View');
        $('#' + linkId).html('View Resume');
        $('#embed-resume').attr('style', 'display:none').show(250);
        shown = false;
    }
}

function navigateToLinkedIn() {
    window.open("https://www.linkedin.com/in/ben-pister-3b91883b", "_blank");
}