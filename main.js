
function toggleMenu() {
    const fullScreenMenu = document.querySelector('.full-screen-menu');
    fullScreenMenu.classList.toggle('open'); 
}

function closeMenuOnResize() {
    const fullScreenMenu = document.querySelector('.full-screen-menu');
    if (window.innerWidth > 768 && fullScreenMenu.classList.contains('open')) {
        fullScreenMenu.classList.remove('open'); 
    }
}
window.addEventListener('resize', closeMenuOnResize);

/*Галерия*/

const catImages = ["static/cat1.jpg", "static/cat2.jpg", "static/cat3.jpg", "static/cat4.jpg",];
const dogImages = ["static/dog1.jpg", "static/dog2.jpg", "static/dog3.jpg", "static/dog4.jpg", ];
let catIndex = 0;
let dogIndex = 0;

function prevCat() {
    catIndex = (catIndex - 1 + catImages.length) % catImages.length;
    document.getElementById('cat-image').src = catImages[catIndex];
}

function nextCat() {
    catIndex = (catIndex + 1) % catImages.length;
    document.getElementById('cat-image').src = catImages[catIndex];
}

function prevDog() {
    dogIndex = (dogIndex - 1 + dogImages.length) % dogImages.length;
    document.getElementById('dog-image').src = dogImages[dogIndex];
}

function nextDog() {
    dogIndex = (dogIndex + 1) % dogImages.length;
    document.getElementById('dog-image').src = dogImages[dogIndex];
}

/* Галерия с постери */

const posterImages = [
    { src: "static/poster1.jpg", link: "https://www.facebook.com/events/892753732986468" },
    { src: "static/poster2.jpg", link: "https://www.facebook.com/events/858058719872483" },
    { src: "static/poster3.jpg", link: "https://www.facebook.com/events/553182930405046" },
    { src: "static/poster4.jpg", link: "https://www.facebook.com/events/525313180014670" },
    { src: "static/poster5.jpg", link: "https://www.facebook.com/events/882380060598437" }
];

const updateImageSize = () => {
    const images = document.querySelectorAll('.gallery-container img');
    images.forEach(image => {
        image.style.width = '960px';
        image.style.height = '540px';
        image.style.objectFit = 'cover';
    });
};

document.addEventListener("DOMContentLoaded", updateImageSize);

let posterIndex = 0;

function updatePoster() {
    const currentPoster = posterImages[posterIndex];
    const posterImageElement = document.getElementById('poster-image');
    const posterLinkElement = document.getElementById('poster-link');
    
    posterImageElement.src = currentPoster.src;
    posterLinkElement.href = currentPoster.link;
}

function prevPoster() {
    posterIndex = (posterIndex - 1 + posterImages.length) % posterImages.length;
    updatePoster();
}

function nextPoster() {
    posterIndex = (posterIndex + 1) % posterImages.length;
    updatePoster();
}
updatePoster();
