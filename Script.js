// Indexpage
const nav = document.querySelector("nav");

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 160) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const faqs = document.querySelectorAll(".wtfaq")

faqs.forEach(wtfaq => {
    wtfaq.addEventListener("click", () => {
    wtfaq.classList.toggle("active");
    })
})

menuIcon.addEventListener("click", () =>{
    mobileMenuContainer.classList.add("active");
});
closeIcon.addEventListener("click", () =>{
    mobileMenuContainer.classList.remove("active");
});