jQuery(document).ready(function() {
        // If the link in menu to "Console Output" is "active" (bold)
        if (jQuery('a[href$="/console"] > b').length > 0) {
                jQuery('#main-table').addClass('showing-console');
        }

});
