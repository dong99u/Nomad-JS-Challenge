const clock = document.querySelector(".main__clock");

function updateTime() {
    const date = new Date();
    const HOUR = String(date.getHours()).padStart(2, "0");
    const MINUTE = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${HOUR}:${MINUTE}`
    greetingMessage(HOUR);
}

setInterval(updateTime, 1000);