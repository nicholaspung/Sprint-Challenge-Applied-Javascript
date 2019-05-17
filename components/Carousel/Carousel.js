class Carousel {

}

let carousel = document.querySelector('.carousel');
let carouselImg = carousel.querySelectorAll('img');
let prevBtn = carousel.querySelector('.left-button');
let nextBtn = carousel.querySelector('.right-button');

// onload 
let currentIndex = 0;
carouselImg[currentIndex].style.display = 'block'

// if statement for end of index
// console.log(Array.from(carouselImg).includes(carouselImg[0].nextElementSibling)) // false

nextBtn.addEventListener('click', () => {
    carouselImg[currentIndex].style.display = 'none';
    // targets next Index
    currentIndex += 1;

    // conditional to check if carousel is on last index to switch to first index
    if (currentIndex >= carouselImg.length) {
        currentIndex = 0;
    }
    carouselImg[currentIndex].style.display = 'block'
})

prevBtn.addEventListener('click', () => {
    carouselImg[currentIndex].style.display = 'none';
    // targets prev Index
    currentIndex -= 1;

    // conditional to check if carousel is on first index to switch to last index
    if (currentIndex < 0) {
        currentIndex = carouselImg.length - 1;
        console.log(currentIndex)
    }
    carouselImg[currentIndex].style.display = 'block'
})

// carouselImg.forEach(e => e.style.display = 'block');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
