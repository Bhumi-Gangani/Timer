var release_date = new Date(2023, 0, 1);

function count() {
    var current_date = new Date();

    var remaining = release_date - current_date;

    var days = Math.floor(remaining / (1000 * 60 * 60 * 24));

    var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    if (days < 10) {
        document.getElementsByClassName("days")[0].innerHTML = "0" + days;
    } else {
        document.getElementsByClassName("days")[0].innerHTML = days;
    }

    if (hours < 10) {
        document.getElementById("hours").innerHTML = "0" + hours;
    } else {
        document.getElementById("hours").innerHTML = hours;
    }

    if (minutes < 10) {
        document.getElementById("minutes").innerHTML = "0" + minutes;
    } else {
        document.getElementById("minutes").innerHTML = minutes;
    }

    if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds;
    } else {
        document.getElementById("seconds").innerHTML = seconds;
    }
}
var interval = setInterval(count, 1000);