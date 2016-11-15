function display_document(docId, linkId){
    

    if (jQuery('#' + docId).is(':visible')) {
        jQuery('#' + docId).hide('slow');
        //jQuery('#' + docId).css('display', 'none');
        jQuery('#' + linkId).html('View Resume');
    }
    else {
        document.getElementById(docId).innerHTML = '<object data="Doc_Resources/Ben_Pister_Resume.pdf" type="application/pdf" width="600" height="800"/>'
        jQuery('#' + docId).show('slow');
        //jQuery('#' + docId).css('display', 'none');
        jQuery('#' + linkId).html('Close Resume');
    }
}