

var shown = true;
function display_document_view(docId, linkId) {

    // Only send to google analytics when View Resume Clicked
    if (!shown) {
        $('#' + linkId).html('View Resume');
        $('#embed-resume').hide(250);
        shown = true;
    }
    else if (shown) {
        ga('send', {'hitType': 'event', 'eventCategory': 'button', 'eventAction':'click'});
        $('#' + linkId).html('Close Resume');
        $('#embed-resume').show(250);
        shown = false;
    }
}