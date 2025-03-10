const revealMessages = document.querySelectorAll('.reveal');

function revealElements(){
    revealMessages.forEach((revealMessage) => {
        const revealPosition = revealMessage.getBoundingClientRect();
        if (revealPosition.top < window.innerHeight && revealPosition.bottom > 0) {
            revealMessage.classList.add('reveal_active')
        }
    })
}
document.addEventListener('scroll', revealElements);

