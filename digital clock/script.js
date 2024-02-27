/*
  Create a digital seconds clock using setInterval and date object in JS. The date object can be used to get the date, time, hours and seconds which can be update using setInterval. Try to keep UI good looking.
*/

const clckFunc = () => {
    let date = new Date();
    let data = String(date).split(" ");
    let time = Array.from(data[4].split(":"));
    // time = time.map(Number);
    let day = date.getDay();
    let Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let hour = document.getElementById("h");
    let min = document.getElementById("m");
    let sec = document.getElementById("s");
    let currDate = document.getElementById("d");
    let currDay = document.getElementById("d1");
  
    hour.innerHTML = time[0];
    min.innerHTML = time[1];
    sec.innerHTML = time[2];
    currDate.innerHTML = data[2] + " " + data[1] + " " + data[3];
    currDay.innerHTML = Day[day];
  }
  
  let timerId = setInterval(clckFunc, 1000);