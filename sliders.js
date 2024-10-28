$(document).ready(function () {
    var savedFontSize = localStorage.getItem('fontSize') || 20; // default to 40
    $('.slide').css('font-size', savedFontSize + 'px'); // Target the .slide class
    $('span').html(savedFontSize);
    $('input[type="range"]').val(savedFontSize); // Set slider to saved value

    // Update font size on input event (while sliding)
    $('input[type="range"]').on('input', function () {
        var v = $(this).val();
        $('.slide').css('font-size', v + 'px'); // Target the .slide class
        $('span').html(v);
    });

    // Save font size on change (when slider is released)
    $('input[type="range"]').on('change', function () {
        var v = $(this).val();
        localStorage.setItem('fontSize', v); // Save new font size
    });
});
