document.addEventListener('DOMContentLoaded', () =>{
    const modalWindow = document.getElementById('subscribe-modal');
    const closeButtons = document.querySelectorAll('.modal__close');

    if (!getCookie('modalClosed')) {
        modalWindow.classList.add('modal_active');
    }
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalWindow.classList.remove('modal_active');
            setCookie('modalClosed', 'true', 3);
        })
    })
 
})   
function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name){                           
    const nameEq = name + "=";
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEq) === 0) {
            return c.substring(nameEq.length, c.length);
        }
    }
    return null;
}
    