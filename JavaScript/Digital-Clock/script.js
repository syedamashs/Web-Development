
function updateclock(){

    const time = new Date();
    let hours = time.getHours()
    const meredian = hours >=12 ? "PM" : "AM";
    if(hours>12) hours = hours - 12;
    hours.toString().padStart(2,0);
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);

    const timestring = `${hours}:${minutes}:${seconds} ${meredian}`;
    document.getElementById("clock").textContent = timestring;
}

updateclock();
setInterval(updateclock,1000);
