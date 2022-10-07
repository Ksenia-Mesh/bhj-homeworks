const timer = function () {
    const output = document.getElementById("timer");
    output.textContent -= 1;
    if (output.textContent <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(inervalID);
    }
}
const inervalID = setInterval(timer, 1000);