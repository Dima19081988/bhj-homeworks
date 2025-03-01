/*let timerElement = document.getElementById("timer");
let timerStart = parseInt(timerElement.textContent);
function countDown() {
    if (timerStart > 0) {
    timerStart --;
    timerElement.textContent = timerStart;
    } else {
        alert("«Вы победили в конкурсе!»")
        clearInterval(interval);
    }
}
let interval = setInterval(countDown, 1000);
*/

let timerElement = document.getElementById("timer");
let totalSeconds = parseInt(timerElement.textContent);

function formattedTime(timeInSeconds) {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function countDown() {
    if (totalSeconds > 0) {
        totalSeconds--;
        timerElement.textContent = formattedTime(totalSeconds);
    } else {
        alert("«Вы победили в конкурсе!»")
        const downloadLink = document.getElementById("downloadLink");
        downloadLink.click();
        clearInterval(interval);
    }
}
let interval = setInterval(countDown, 1000);
timerElement.textContent = formattedTime(totalSeconds); 
