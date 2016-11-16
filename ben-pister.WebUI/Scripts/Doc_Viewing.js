var shown = true;
function display_document(docId, linkId) {
    
    if (!shown) {
        jQuery('#' + linkId).html('View Resume');
        document.getElementById(docId).innerHTML = ''
        shown = true;
    }
    else {
        jQuery('#' + linkId).html('Close Resume');
        document.getElementById(docId).innerHTML = '<embed src="Doc_Resources/Ben_Pisters_Resume.pdf" type="application/pdf" width="600" height="800"/>'
        shown = false;
    }
}
