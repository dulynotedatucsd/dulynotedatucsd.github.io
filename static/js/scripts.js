// Music carousel
const carousel = document.getElementById('musicCarousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const scrollAmount = 550;

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
