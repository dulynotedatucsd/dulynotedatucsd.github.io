// Music carousel
const carousel = document.getElementById('musicCarousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const scrollAmount = 550;

if (nextBtn && prevBtn && carousel) {
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    })

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        })
    });
}

// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Close mobile nav when clicking on a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.classList.remove('active');
        }
    });
}

// Dropdown menus
var collapsibles = document.getElementsByClassName("collapsible");
const buttons = document.querySelectorAll(".collapsible");

for (i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener('click', function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.style.display = content.style.display === "grid" ? "none" : "grid";
    })
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle("clicked");
    })
})
