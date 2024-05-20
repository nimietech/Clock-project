

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let session = document.getElementById("session")


setInterval( function() {
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10?"0":"") + currentTime.getHours();

    minutes.innerHTML = (currentTime.getMinutes() < 10?"0":"") + currentTime.getMinutes();

    seconds.innerHTML = (currentTime.getSeconds() < 10?"0":"") + currentTime.getSeconds();


    if (hours.innerHTML >= 12){
        session.innerHTML = "PM"
    } else{
        session.innerHTML = "AM"
    }

}, 1000)







