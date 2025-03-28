document.addEventListener('DOMContentLoaded', () => {
    const modalMain = document.getElementById('modal_main');
    const modalSucces = document.getElementById('modal_success');
    const closeButtons = document.querySelectorAll('.modal__close');
    const showSuccessButton = document.querySelector('.show-success');

    modalMain.classList.add('modal_active');

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const activeModal = button.closest('.modal');
            activeModal.classList.remove('modal_active');

            if (activeModal === modalMain) {
                return;
            }
        })
    })

    showSuccessButton.addEventListener('click', function(event) {
        event.preventDefault();

        showSuccessButton.classList.remove('.btn_danger');
        showSuccessButton.classList.add('btn_success');
        showSuccessButton.textContent = 'Хорошо сделано!';

        modalMain.classList.remove("modal_active");
        modalSucces.classList.add('modal_active');
    })
})