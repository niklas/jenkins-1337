jQuery(document).ready(function() {
        // If the URL path contains 'console'
        if (window.location.pathname.indexOf('console') > 1) {
                jQuery('#main-table').addClass('showing-console');
        }

});
