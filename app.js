const countDownDate = new Date("Feb 20, 2022 22:59:40").getTime();

let x = setInterval(()=>{
    const today = new Date().getTime();
    let distance =today- countDownDate;
    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    let seconds = Math.floor((distance%(1000*60))/1000);
    document.getElementById("days").innerHTML= days;
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;
},1000);