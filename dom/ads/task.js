const rotators = document.querySelectorAll('.rotator__case');

let currentIndex = 0;
const speed = 1000;

rotators.forEach ((rotator, index) => {
    if (index !== currentIndex) {
        rotator.classList.remove('rotator__case_active');
    } else {
        rotator.classList.add('rotator__case_active');
    }
});
setInterval (() => {
    rotators[currentIndex].classList.remove('rotator__case_active');
    currentIndex = (currentIndex + 1) % rotators.length;
    rotators[currentIndex].classList.add('rotator__case_active');
}, speed);