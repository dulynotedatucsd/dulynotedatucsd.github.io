const carousel = document.getElementById('musicCarousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
var coll = document.getElementsByClassName("collapsible");
const buttons = document.querySelectorAll(".collapsible");
var i;
const alumni = document.getElementById('alumni')
const basePath = 'images/members/alumni/'; // adjust path to your folder
const container = document.getElementById('alumni-container');
const scrollAmount = 550;
const images = [
    "Abdullah_Bawazir.webp",
    "Abraham_Chen.webp",
    "Albert_Nguyen.webp",
    "Alexander_Kourjanski.webp",
    "Alexie_Sousa.webp",
    "Alwin_Szeto.webp",
    "Austin_Eamnarangkool.webp",
    "Austin_Rennels.webp",
    "Autumn_Hope.webp",
    "Caleb_Yun.webp",
    "Cameron_Joh.webp",
    "Catherine_Ibrahim.webp",
    "Chris_Gross.webp",
    "Christal_Vo.webp",
    "Christy_Park.webp",
    "Chris_Wong.webp",
    "Cindy_Huang.webp",
    "Connor_Daley.webp",
    "Danielle_Tobey.webp",
    "Daniel_Tsay.webp",
    "Denise_Gonzales.webp",
    "Donna_Kim.webp",
    "Elias_Fang.webp",
    "Erin_Brown.webp",
    "Evan_Laufer.webp",
    "Jen-Ann_Lee.webp",
    "Jeremy_Aranda.webp",
    "Jeremy_Greenstein.webp",
    "Jolina_Galano.webp",
    "Jonathan_Truong.webp",
    "Joshua_Yuen.webp",
    "Julian_Haddad.webp",
    "Justin_Vu.webp",
    "Kari-Ann_Yoshida.webp",
    "Kelly_Leung.webp",
    "Kenneth_Chung.webp",
    "Keoni_Butler.webp",
    "Krystl_Fabella.webp",
    "Lena_Mier.webp",
    "Linnea_Lagerstrom.webp",
    "Micah_Banawis.webp",
    "Michelle_Yee.webp",
    "Monica_Hwang.webp",
    "Natalie_Romero.webp",
    "Natalie_Teuton.webp",
    "Olivia_Baaten.webp",
    "Reilly_Gallagher.webp",
    "Rosey_Williams.webp",
    "Sarah_Chen.webp",
    "Sarah_Park.webp",
    "Sean_Oh.webp",
    "Sofia_Nguyen.webp",
    "Valerie_Tran.webp",
    "William_Kim.webp"
]

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  });
}

buttons.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("clicked");
    });
});

    // Generate HTML for each image and append to the container
    images.forEach(image => {
        const imgname = document.createElement('div');
        const imgElement = document.createElement('img');
        imgElement.src = basePath + image;
        imgElement.classList.add('table-image');
        imgname.appendChild(imgElement)
        const thename = document.createElement('div');
        const node = document.createTextNode(image.split('.')[0].replace('_', " "));
        thename.appendChild(node);
        imgname.appendChild(thename);
        imgname.classList.add('table-element');
        container.appendChild(imgname);
    });
