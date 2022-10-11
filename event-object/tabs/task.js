const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));


for (let i = 0; i < tabs.length; i++) {
	
	const tab = tabs[i];
	
	tab.addEventListener("click", () => {
		const tabActive = document.querySelector(".tab_active");
		const tabContentActive = document.querySelector(".tab__content_active");
		
		tab.classList.add("tab_active");
		tabContent[tabs.indexOf(tab)].classList.add("tab__content_active");
		
		tabActive.classList.remove("tab_active");
		tabContentActive.classList.remove("tab__content_active");
		
	})
}