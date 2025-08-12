// // Navbar Fixed
let lastScroll = 0;
const header = document.querySelector("header");
const textElements = header.querySelectorAll(".text-white");
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

let isMenuOpen = false;
//Fungsi update warna teks
function setNavbarTextWhite() {
  textElements.forEach((el) => {
    el.classList.add("text-white");
    el.classList.remove("text-slate-900");
  });
}
function setNavbarTextDark() {
  textElements.forEach((el) => {
    el.classList.remove("text-white");
    el.classList.add("text-slate-900");
  });
}
// Scroll hide/show navbar
window.addEventListener("scroll", () => {
  let valueScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  const fixedNav = header.offsetTop;

  if (window.pageYOffset <= fixedNav && !isMenuOpen) {
    // Top
    header.classList.remove("bg-white", "shadow-sm");
    setNavbarTextWhite();
  } else if (valueScroll > lastScroll && !isMenuOpen) {
    // Bottom Scroll
    header.classList.add("-translate-y-full");
    header.classList.remove("translate-y-0", "bg-white");
  } else {
    // Top Scroll
    header.classList.add("translate-y-0", "bg-white", "shadow-sm");
    header.classList.remove("-translate-y-full");
    setNavbarTextDark();
  }

  lastScroll = valueScroll <= 0 ? 0 : valueScroll;
});
// Humburger menu
hamburger.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    // Show menu
    navMenu.classList.remove("opacity-0", "-translate-x-full");
    navMenu.classList.add("opacity-100", "translate-x-0");
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    // Merubah navbar
    header.classList.add("bg-white", "shadow-sm", "translate-y-0");
    setNavbarTextDark();
  } else {
    // Close Menu
    navMenu.classList.add("opacity-0", "-translate-x-full");
    navMenu.classList.remove("opacity-100", "translate-x-0");
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';

    if (window.scrollY <= 0) {
      header.classList.remove("bg-white", "shadow-sm");
      setNavbarTextWhite();
    }
  }
});

// Swipper Manual
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cardJs");
  const mainImage = document.getElementById("main-image");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  // Fungsi Perulangan Card
  function showCard(index) {
    cards.forEach((card) => card.classList.add("hidden"));

    cards[index].classList.remove("hidden");
    const newImage = cards[index].getAttribute("data-image");
    mainImage.src = newImage;
  }

  nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= cards.length) {
      currentIndex = 0;
    }
    showCard(currentIndex);
  });

  // Show Card 1
  showCard(currentIndex);
});

// Testimoni Section
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
