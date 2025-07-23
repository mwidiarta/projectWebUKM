// Navbar Fixed
let lastScroll = 0;
const header = document.querySelector("header");
const textElements = header.querySelectorAll(".text-white");

window.addEventListener("scroll", () => {
  let valueScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  const fixedNav = header.offsetTop;
  if (window.pageYOffset == fixedNav) {
    // console.log("tetap");
    header.classList.remove("bg-white");
    header.classList.remove("shadow-sm");
    textElements.forEach((el) => {
      el.classList.add("text-white");
      el.classList.remove("text-slate-900");
    });
  } else if (valueScroll > lastScroll) {
    // console.log("bottom");
    header.classList.add("-translate-y-full");
    header.classList.remove("bg-white");
    header.classList.remove("translate-y-0");
  } else {
    // console.log("top");
    header.classList.add("translate-y-0");
    header.classList.add("bg-white");
    header.classList.add("shadow-sm");
    header.classList.remove("-translate-y-full");

    textElements.forEach((el) => {
      el.classList.remove("text-white");
      el.classList.add("text-slate-900");
    });
  }
  lastScroll = valueScroll <= 0 ? 0 : valueScroll;
});

// Js Project Section Pagination
const group1 = document.getElementById("group-card1");
const group2 = document.getElementById("group-card2");
const mainImage = document.getElementById("main-image");
const nextButton = document.getElementById("nextBtn");
let showingFirst = true;
nextButton.addEventListener("click", () => {
  if (showingFirst) {
    group1.classList.add("hidden");
    group1.classList.remove("flex");
    group2.classList.remove("hidden");
    group2.classList.add("flex");
  } else {
    group2.classList.add("hidden");
    group2.classList.remove("flex");
    group1.classList.remove("hidden");
    group1.classList.add("flex");
  }
  showingFirst = !showingFirst;
});

document.querySelectorAll(".cardJs").forEach((card) => {
  card.addEventListener("click", () => {
    const imgPath = card.dataset.image;
    mainImage.src = imgPath;
  });
});

// JS Testimoni Section
// Swipper
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 34,
  // centeredSlides: true,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

// Menghitung jumlah Input User Page Contact
function updateCount(el) {
  const count = el.value.length;
  document.getElementById("count").textContent = `${count}/200`;
}
