const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");

dropdownValue.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown__list_active");
})

function select(event) {
	dropdownValue.textContent = event.target.textContent;
	dropdownList.classList.remove("dropdown__list_active");
	event.preventDefault();
}

dropdownList.addEventListener("click", select);