window.onload = function showTime(){
    var date = new Date();
    var hours = date.getHours(); // 0-23
    var minutes = date.getMinutes(); // 0-59
    var seconds = date.getSeconds(); // 0-59
    var meridiem = "AM";

    if(hours == 00){
      hours = 12;
    }

    if(hours > 12){
        hours = hours - 12;
        meridiem = "PM";
    }


    // if(hours < 10){     // This is NOT ternary code
    //     "0" + hours
    // } else {
    //     hours
    // }
    // if(minutes < 10){
    //     "0" + minutes
    // } else {
    //     minutes
    // }
    // if(seconds < 10){
    //     "0" + seconds
    // } else {
    //     seconds
    // }


    // ternary = ((((((condition ? exprIfTrue : exprIfFalse))))))

    hours = (hours < 10) ? "0" + hours : hours; // This IS ternary code
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("clockText").innerText = time; 
    // .innerText goes ONLY to HTML, not CSS or JS, finds id="clockText" and expresses it as an h1

    setTimeout(showTime, 1000);
}
