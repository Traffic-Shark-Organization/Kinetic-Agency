jQuery(document).ready(function ($) {
    $('input[type=file]').on('change', function () {
        let file = this.files[0];
        $(this).closest('[data-name=cv-attach]').html('<span class="custom-file">File: ' + file.name + '</span>');
    });
});