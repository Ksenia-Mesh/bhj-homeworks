const openWindows = document.querySelector("#modal_main");
const wellDone = document.querySelector("#modal_success");
const doWell = document.querySelector(".show-success");
const closeWindow = document.querySelectorAll(".modal__close_times");

function openWindow() {
    openWindows.classList.add("modal_active");
  }

function closePopup() {
    for (let i = 0; i < closeWindow.length; i++) {
        let eachClose = closeWindow[i];

        let closeFunc = () => {
            wellDone.style.display = "none";
            openWindows.style.display = "none";
        };

        eachClose.onclick = closeFunc;
    }
}

doWell.onclick  = function successOpen() {
    openWindows.className = "modal";
    wellDone.className = "modal modal_active";
};

openWindow();
closePopup();