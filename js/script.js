//mobile nav functionality

console.log("script loaded");

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

if (btnNav){

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
};
//nav expand functionality

header.addEventListener("mouseenter", () => {
  header.classList.add("expanded");
  console.log("mouse entered");
});

header.addEventListener("mouseleave", () => {
  header.classList.remove("expanded");
});

//mobile expand with touch

header.addEventListener("click", () => {
  header.classList.toggle("expanded");
});


