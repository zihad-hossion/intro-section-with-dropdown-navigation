const sideBar = document.querySelector(".sidebar");
const menuBar = document.querySelector(".menu-bar");
const closeBar = document.querySelector(".close-bar");

menuBar.addEventListener("click", () => {
    sideBar.classList.remove("hidden");
})
closeBar.addEventListener("click", () => {
    sideBar.classList.add("hidden");
})

// toggle function for sidebar
function toggleSubMenu(num) {
    const subMenu = document.querySelector(`.mob-bar .ss${num}`);
    subMenu.classList.toggle("hidden");
}