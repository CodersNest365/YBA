// navbar.js
function initNavbar() {
  const nav = document.getElementById("mainNav");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!nav || !hamburger || !mobileMenu) return;

  // Blur on scroll for navbar itself
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    // 👇 Auto-close menu if user scrolls
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    }
  });

  // Toggle mobile menu
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
  });

  // Close menu if clicking outside
  document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove("active");
    }
  });

  // Init icons
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Run immediately
initNavbar();
