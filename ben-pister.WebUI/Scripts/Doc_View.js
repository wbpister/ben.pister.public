

var shown = true;
function display_document_view(docId, linkId) {

    // Only send to google analytics when View Resume Clicked
    if (!shown) {
        $('#' + linkId).html('View Resume');
        $('#' + docId).hide(250);
        $('#' + docId).html('');
        $('#embed-resume').hide(250);
        shown = true;
    }
    else if (shown) {
        ga('send', 'view', 'Resume', 'view-only', 'Resume View');
        $('#' + linkId).html('Close Resume');
        $('#' + docId).show(250);
        $('#' + docId).html('<embed id="embed-resume" class="resume-initial" src="/Doc_Resources/Ben_Pisters_Resume.pdf" type="application/pdf" width="600" height="800" />');
        //$('#embed-resume').show(250);
        shown = false;
    }
}