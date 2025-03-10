const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");
const arrayTabs = Array.from(tabs);
arrayTabs.forEach((tab) => {
    tab.addEventListener("click", function() {
        const indexTab = arrayTabs.indexOf(this);
        arrayTabs.forEach(t => t.classList.remove("tab_active"));
        this.classList.add("tab_active")

        contents.forEach(content => content.classList.remove("tab__content_active"));
        contents[indexTab].classList.add("tab__content_active")
    })
})