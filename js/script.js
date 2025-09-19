//mobile nav variables

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

//gallery variables
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

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


//gallery functionality

if (galleryImages.length > 0 && lightbox && lightboxImg && closeBtn) {

  console.log("gallery activated")
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";  
      lightboxImg.src = img.src;        
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none"; 
    }
  });
}

