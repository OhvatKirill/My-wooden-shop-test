'use strict';
let arrPhoto = [
    'assets/IMG_2453.jpg',
    'assets/IMG_2462.jpg',
    'assets/IMG_2464.jpg'
]

let imga = document.querySelector('.photo');
let nextBtn = document.getElementById('next');
let previousBtn = document.getElementById('previous');
let numImage = 0;
imga.src = arrPhoto[numImage];

nextBtn.addEventListener('click', () => {
    numImage++;
    if (numImage >= arrPhoto.length) {
        numImage = 0;
        let secretDiv = document.createElement('div');
        secretDiv.innerHTML = 'Появился секретный див!';
        document.querySelector('.section_two').prepend(secretDiv);

    }
    console.log(numImage >= arrPhoto.length - 1);
    console.log(numImage);
    imga.src = arrPhoto[numImage]
})

previousBtn.addEventListener('click', () => {
    numImage--;
    if (numImage < 0) {
        numImage = arrPhoto.length - 1;
    };
    imga.src = arrPhoto[numImage];
})