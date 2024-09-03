
const images = document.querySelector('.carousel-images');
const totalImages = images.querySelectorAll('img').length;
let index = 0;

document.querySelector('.carousel-button.next').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    images.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    images.style.transform = `translateX(-${index * 100}%)`;
});
