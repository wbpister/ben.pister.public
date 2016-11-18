var shown = true;
function display_document_view(docId, linkId) {

    if (!shown) {
        jQuery('#' + linkId).html('View Resume');
        document.getElementById(docId).innerHTML = ''
        jQuery('#' + docId).hide(250);
        shown = true;
    }
    else if(shown) {
        jQuery('#' + linkId).html('Close Resume');
        document.getElementById(docId).innerHTML = '<embed src="Doc_Resources/Ben_Pisters_Resume.pdf" type="application/pdf" width="600" height="800"/>';
        jQuery('#' + docId).show(250);
        shown = false;
    }
}