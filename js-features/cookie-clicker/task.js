let counter = 0;
let clickStartTime = null;
const cookie = document.getElementById("cookie");
const counterDisplay = document.getElementById("clicker__counter");
const averageClickTime = document.getElementById("clicker__speedCounter");
let cookieLarge = true;
cookie.onclick = function () {
    counter ++;
    counterDisplay.textContent = counter;
    if (cookieLarge) {
        cookie.width = 170;
    } else {
        cookie.width = 200;
    }
    cookieLarge = !cookieLarge;
    
    if (clickStartTime === null) {
        clickStartTime = new Date();
    }
    const currentTime = new Date();
    const timeAfterClick = (currentTime - clickStartTime) / 1000;
    const averageClick = (counter / timeAfterClick).toFixed(2);
    averageClickTime.textContent = averageClick;
}