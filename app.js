$('#arden').hover(
    function () {
        $('.matt').attr('src', './img/arden.png');
    },
    function () {
        $('.matt').attr('src', './img/matt.png');
    }
)

$(".icon-container").hover(function (e) {
    $(this).children(".tooltip").toggleClass("hidden");
})