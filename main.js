let timer
let sec = 10;

const nowTime = document.getElementById("nowTime");
const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");

setTime.addEventListener("click", function () {
    sec = document.getElementById("inputTime").value;
    nowTime.textContent = `${sec}:セット完了です`;
});

const countDown = function () {
    timer = setInterval(() => {
        sec--; nowTime.textContent = sec
        if (sec === 0) {
            alert("終了");
            clearInterval(timer);
        }
    }, 1000)
    console.log(sec);
};

startTimer.addEventListener("click", function () {
    // clearInterval(timer);
    // setInterval(countDown(), 1000);
    countDown()
});

stopTimer.addEventListener("click", function () {
    clearInterval(timer);
    nowTime.textContent = `${sec}:ストップしました`;
});
