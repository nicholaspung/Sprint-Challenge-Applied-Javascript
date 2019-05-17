class Carousel {

}

let carousel = document.querySelector('.carousel');
let carouselImg = carousel.querySelectorAll('img');
let prevBtn = carousel.querySelector('.left-button');
let nextBtn = carousel.querySelector('.right-button');

let currentIndex = 0;
carouselImg[currentIndex].style.display = 'block'

// if statement for end of index
//console.log(Array.from(carouselImg).includes(carouselImg[3].nextElementSibling)) // false

nextBtn.addEventListener('click', () => {
    carouselImg[currentIndex].style.display = 'none';
    // targets next Index
    currentIndex += 1;
    carouselImg[currentIndex].style.display = 'block'
})

prevBtn.addEventListener('click', () => {
    carouselImg[currentIndex].style.display = 'none';
    // targets prev Index
    currentIndex -= 1;
    carouselImg[currentIndex].style.display = 'block'
})
// when page first loads, add display [0]
// when right button is clicked, remove display [0] and add display [1]
// when left button is clicked, remove display [1] and add display [0]






// carouselImg.forEach(e => e.style.display = 'block');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
