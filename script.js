// Counter animation
function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        counter.innerText = Math.floor(progress * target).toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Intersection Observer for scroll effect
const statsSection = document.querySelector(".stats");
const counters = document.querySelectorAll(".counter");

let started = false;
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            statsSection.classList.add("show");
            counters.forEach(counter => animateCounter(counter));
            started = true; // run only once
        }
    });
}, { threshold: 0.5 });

observer.observe(statsSection);

// Arrow scrolling when user is on phone 
function scrollServices(direction) {
    const grid = document.getElementById("servicesGrid");
    const scrollAmount = grid.clientWidth * 0.8; // scroll by one card width
    grid.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

const slides = document.querySelectorAll(".testimonial-slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.classList.remove("active");
        if (idx === i) slide.classList.add("active");
    });
}

prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

// Auto start with first slide
showSlide(index);

