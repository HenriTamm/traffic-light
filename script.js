
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");

const green = document.getElementById("green");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
let redTimeOut;
let greenTimeOut;
let blueTimeOut;
let resetTimeOut;

function reset() {
    green.style.background = "black";
    blue.style.background = "black";
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
    }, 5000);

    // valmis
    blueTimeOut = setTimeout(function () {
        blue.style.background = "blue";
    }, 17000);

    // start
    redTimeOut = setTimeout(function () {
        red.style.background = "red";
    }, 19000);

    // reset
    resetTimeOut = setTimeout(function () {
        reset();
    }, 20000);
}, false);

resetButton.addEventListener("click", function () {
    reset();
    clearTimeout(greenTimeOut);
    clearTimeout(blueTimeOut);
    clearTimeout(redTimeOut);
    clearTimeout(resetTimeOut);
}, false);




