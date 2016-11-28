

var shown = true;
function display_document_view(docId, linkId) {

    // Only send to google analytics when View Resume Clicked
    if (!shown) {
        $('#' + linkId).html('View Resume');
        $('#embed-resume').hide(250);
        shown = true;
    }
    else if (shown) {
        ga('send', 'view', 'Resume', 'view-only', 'Resume View');
        $('#' + linkId).html('Close Resume');
        $('#embed-resume').show(250);
        shown = false;
    }
}