let dateContainer = document.querySelector(".date-container");
let hourContainer = document.querySelector(".hour");
let minuteContainer = document.querySelector(".minutes");
let secandContainer = document.querySelector(".secand");


const weekdays =[
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday"
];

const monthNames =[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
];

function formatTime(time){
    return time < 10 ? "0" + time : time;
}

function updateClock(){
    const today = new Date();
//    console.log(today);
    let date = today.getDate();
   // console.log(date)
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];
  //  console.log(date,month)
  //  console.log(today.getDate(),today.getMonth());


    let hour = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let secand = formatTime(today.getSeconds());


    dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;

    hourContainer.textContent = hour+ ":";
    minuteContainer.textContent = minutes+ ":";
    secandContainer.textContent = secand;



}

setInterval(updateClock,1000);