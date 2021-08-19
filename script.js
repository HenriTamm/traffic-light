
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");

const red = document.getElementById("red");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
let redTimeOut;
let greenTimeOut;
let yellowTimeOut;
let resetTimeOut;

function reset() {
    green.style.background = "black";
    yellow.style.background = "black";
    red.style.background = "black";
    startButton.disabled = false;
    resetButton.disabled = true;
}

startButton.addEventListener("click", function () {
    startButton.disabled = true;
    resetButton.disabled = false;
    // kohtadele
    greenTimeOut = setTimeout(function () {
        green.style.background = "green";
    }, 1000);

    // valmis
    yellowTimeOut = setTimeout(function () {
        yellow.style.background = "yellow";
    }, 2000);

    // start
    redTimeOut = setTimeout(function () {
        red.style.background = "red";
    }, 3000);

    // reset
    resetTimeOut = setTimeout(function () {
        reset();
    }, 4000);
}, false);

resetButton.addEventListener("click", function () {
    reset();
    clearTimeout(greenTimeOut);
    clearTimeout(yellowTimeOut);
    clearTimeout(redTimeOut);
    clearTimeout(resetTimeOut);
}, false);




