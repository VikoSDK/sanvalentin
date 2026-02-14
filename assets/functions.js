var $window = $(window);
var clientWidth = $window.width();
var clientHeight = $window.height();
$window.resize(function() {
    clientWidth = $window.width();
    clientHeight = $window.height();
} );
function timeElapse(date) {
    var current = new Date();
    current.setHours(current.getHours() - 1);
    var seconds = (current.getTime() - date.getTime()) / 1000;

    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);

    var hours = Math.floor(seconds / 3600);
    if (hours < 10) hours = "0" + hours;

    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) minutes = "0" + minutes;

    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;

    var result = " <span class=\"digit\">" + days + "</span> días " +
        "<span class=\"digit\">" + hours + "</span> horas " +
        "<span class=\"digit\">" + minutes + "</span> minutos " +
        "<span class=\"digit\">" + seconds + "</span> segundos";
    $("#clock").html(result);
}