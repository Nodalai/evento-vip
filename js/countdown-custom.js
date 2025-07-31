jQuery(document).ready(function() {
    $(function () {
        $('#defaultCountdown').countdown({
            until: new Date(2025, 10 - 1, 15, 8) // octubre = mes 10 (se resta 1), día 15, hora 8 AM
        });
    });
});
