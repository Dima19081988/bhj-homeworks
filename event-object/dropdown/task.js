const valueElement = document.querySelector(".dropdown__value");
const listElement = document.querySelector(".dropdown__list");
const items = document.querySelectorAll(".dropdown__item");
valueElement.addEventListener ("click", () => {
    listElement.classList.toggle("dropdown__list_active");
})
items.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        valueElement.textContent = item.querySelector(".dropdown__link").textContent;
        listElement.classList.remove("dropdown__list_active");
    });
});