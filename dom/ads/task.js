const rotators = document.querySelectorAll('.rotator__case');

let currentInddex = 0;
const speed = 1000;

rotators.forEach ((rotator, index) => {
    if (index !== currentInddex) {
        rotator.classList.remove('rotator__case_active');
    } else {
        rotator.classList.add('rotator__case_active');
    }
});
setInterval (() => {
    rotators[currentInddex].classList.remove('rotator__case_active');
    currentInddex = (currentInddex + 1) % rotators.length;
    rotators[currentInddex].classList.add('rotator__case_active');
}, speed);