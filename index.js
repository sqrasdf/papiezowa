var styling = `font-family: "Lato", sans-serif;
color: #fac997;
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;
overflow:auto;
background-size: 1600% 1600%;
-webkit-animation: AnimationName 3s ease infinite;
-moz-animation: AnimationName 3s ease infinite;
-o-animation: AnimationName 3s ease infinite;
animation: AnimationName 3s ease infinite;`;

function updateTime(){
    var date = new Date();
    var actualHour = date.getHours();
    var actualMinute = date.getMinutes();
    var actualSecond = date.getSeconds();
    var timeinseconds = actualSecond + actualMinute * 60 + actualHour * 3600;
    var timerValues = [];

    var partyTime = 77820;
    partyTime = 36000; // 10:00
    // partyTime = 82680;
    // partyTime =68020 // 18:53
    var anthemLength = 50;
    // czas < 21:37
    if (timeinseconds < partyTime){
        var remainingTime = partyTime - timeinseconds;
        var timerHour = Math.floor(remainingTime / 3600);
        remainingTime -= timerHour * 3600;
        timerValues[0] = timerHour;

        var timerMinute = Math.floor(remainingTime / 60);
        remainingTime -= timerMinute * 60;
        timerValues[1] = timerMinute;

        var timerSecond = remainingTime;
        timerValues[2] = timerSecond;
    }
    // 21:37, partying for one minute
    if (timeinseconds == partyTime){
        papajak();
    }
    
    if (timeinseconds == partyTime + anthemLength + 1){
        normal();
    }
    
    // time >= 21:38
    if (timeinseconds > partyTime + anthemLength){
        var remainingTime = 86400 - timeinseconds + partyTime;
        var timerHour = Math.floor(remainingTime / 3600);
        remainingTime -= timerHour * 3600;
        timerValues[0] = timerHour;

        var timerMinute = Math.floor(remainingTime / 60);
        remainingTime -= timerMinute * 60;
        timerValues[1] = timerMinute;

        var timerSecond = remainingTime;
        timerValues[2] = timerSecond;
    }

    var time = "";
    for (let i = 0; i < 3; i++){
        if (timerValues[i] < 10){
            time = time + "0" + timerValues[i];
        }
        else{
            time = time + timerValues[i];
        }
        if (i != 2){
            time += ":";
        }
    }
    
    var timer = document.getElementById("timer");
    timer.innerHTML = time;

 }

var t=setInterval(updateTime, 1000);

function papajak(){
    document.getElementById("barka").innerHTML = "<audio src=\"yo.mp3\" autoplay></audio>";
    document.getElementById("papaj").innerHTML = '<img class="papajakgif" src="papajak.gif" >';
    document.querySelector('#text').style.opacity = '0';
    document.querySelector('#timer').style.opacity = '0';
    document.body.style = `background: linear-gradient(270deg, #f30e0e, #f39d0e, #e3f30e, #74f30e, #0ef3cc, #0e64f3, #d30ef3, #f30e35);` + styling;
}

function normal(){
    document.getElementById("barka").innerHTML = "";
    document.getElementById("papaj").innerHTML = "";
    document.querySelector('#text').style.opacity = '1';
    document.querySelector('#timer').style.cssText += 'opacity: 1;'
    document.body.style = `background: #1B1A17;` + styling;
}

