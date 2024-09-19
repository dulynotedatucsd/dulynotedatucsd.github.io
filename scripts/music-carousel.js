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
    "2013_Alwin_Szeto_Bass.webp",
    "2013_Danielle_Tobey_Alto.webp",
    "2013_Jen-Ann_Lee_Alto.webp",
    "2013_Joshua_Yuen_Bass.webp",
    "2013_Sarah_Park_Alto.webp",
    "2014_Abraham_Chen_Bass.webp",
    "2014_Chris_Wong_Bass.webp",
    "2014_Donna_Kim_Alto.webp",
    "2014_Kari-Ann_Yoshida_Soprano.webp",
    "2014_Monica_Hwang_Alto.webp",
    "2014_William_Kim_Bass.webp",
    "2015_Connor_Daley_Tenor.webp",
    "2015_Julian_Haddad_Tenor.webp",
    "2015_Krystl_Fabella_Alto.webp",
    "2015_Lena_Mier_Alto.webp",
    "2015_Sean_Oh_Bass.webp",
    "2016_Chris_Gross_Bass.webp",
    "2016_Christal_Vo_Alto.webp",
    "2016_Daniel_Tsay_Tenor.webp",
    "2016_Justin_Vu_Baritone.webp",
    "2016_Linnea_Lagerstrom_Soprano.webp",
    "2016_Michelle_Yee_Soprano.webp",
    "2016_Rosey_Williams_Alto.webp",
    "2017_Albert_Nguyen_Baritone.webp",
    "2017_Alexie_Sousa_Alto.webp",
    "2017_Austin_Eamnarangkool_Tenor.webp",
    "2017_Austin_Rennels_Tenor.webp",
    "2017_Christy_Park_Soprano.webp",
    "2017_Erin_Brown_Alto.webp",
    "2020_Abdullah_Bawazir_Beatbox.webp",
    "2020_Kelly_Leung_Soprano.webp",
    "2020_Micah_Banawis_Mezzo.webp",
    "2020_Reilly_Gallagher_Alto.webp",
    "2021_Caleb_Yun_Bass.webp",
    "2021_Cameron_Joh_Bass.webp",
    "2021_Denise_Gonzales_Alto.webp",
    "2021_Evan_Laufer_Tenor.webp",
    "2021_Jonathan_Truong_Tenor.webp",
    "2021_Keoni_Butler_Baritone.webp",
    "2021_Natalie_Romero_Alto.webp",
    "2021_Olivia_Baaten_Soprano.webp",
    "2022_Cindy_Huang_Mezzo.webp",
    "2022_Elias_Fang_Tenor.webp",
    "2022_Jeremy_Greenstein_Baritone.webp",
    "2022_Jolina_Galano_Mezzo.webp",
    "2022_Natalie_Teuton_Alto.webp",
    "2022_Sarah_Chen_Soprano.webp",
    "2023_Catherine_Ibrahim_Mezzo.webp",
    "2023_Sofia_Nguyen_Soprano.webp",
    "2023_Valerie_Tran_Mezzo.webp",
    "2024_Alexander_Kourjanski_Bass&Beatbox.webp",
    "2024_Autumn_Hope_Tenor.webp",
    "2024_Jeremy_Aranda_Tenor&Baritone.webp",
    "2024_Kenneth_Chung_Baritone.webp"
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
    imgname.appendChild(imgElement);
    const thename = document.createElement('div');
    const theinfo = document.createElement('div');
    let title = image.split('.')[0].split('_');
    const name_node = document.createTextNode(title.slice(1, title.length-1).join(' '));
    const info_node = document.createTextNode(title[title.length-1].replace("&", " & ") + " | " + title[0]);
    thename.appendChild(name_node);
    thename.classList.add('table-name');
    theinfo.appendChild(info_node);
    imgname.appendChild(thename);
    imgname.appendChild(info_node);
    imgname.classList.add('table-element');
    container.appendChild(imgname);
});
