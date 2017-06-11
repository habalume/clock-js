// function time() {
//     var currentTime = new Date();

//     // get minutes
//     var min = currentTime.getMinutes();
//     if(min < 10) min = "0" + min; // if minutes is not double digits, add a zero in front

//     // get hours
//     var hr = currentTime.getHours();
//     if(hr < 10) hr = "0" + hr;  // if hours is not double digits, add a zero in front

//     // get seconds
//     var sec = currentTime.getSeconds();
//     if(sec < 10) sec = "0" + sec; // if seconds is not double digits, add a zero in front

//     // return time in hex code
//     var hexTime = hr + ":" + min + ":" + sec
//     return hexTime;
// }

// // get button
// var btn = document.getElementById("check")

// // when button is clicked
// btn.onclick = function() {
//     document.getElementsByClassName("hex")[0]["innerHTML"] = time();
// }

function time() {
    var currentTime = new Date();

    // get minutes
    var min = currentTime.getMinutes();
    if(min < 10) min = "0" + min; // if minutes is not double digits, add a zero in front

    // get hours
    var hr = currentTime.getHours();
    if(hr < 10) hr = "0" + hr;  // if hours is not double digits, add a zero in front

    // get seconds
    var sec = currentTime.getSeconds();
    if(sec < 10) sec = "0" + sec; // if seconds is not double digits, add a zero in front

    // return time in hex code
    var hexTime = hr + ":" + min + ":" + sec
    return hexTime;
}

// get button
var btn = document.getElementById("check")

// when button is clicked
btn.onclick = function() {
    var hex = time()
    document.getElementsByClassName("hex")[0]["innerHTML"] = hex;

    // conditional greeting
    var hour = Number(hex.slice(0,1));
    if(hour > 11 && hour < 17) {
        document.getElementsByClassName("greeting")[0]["innerHTML"] = "Good afternoon!";
    } else if (hour > 16) {
        document.getElementsByClassName("greeting")[0]["innerHTML"] = "Good evening!";
    } else {
        document.getElementsByClassName("greeting")[0]["innerHTML"] = "Good morning!";
    }

}
