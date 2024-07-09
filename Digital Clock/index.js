function update_clock(){

    const now = new Date();
    let hour = now.getHours().toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);
    const timeString =`${hour}:${min}:${sec}`;
    document.getElementById("digital").textContent = timeString;
}

update_clock();
setInterval(update_clock, 1000);