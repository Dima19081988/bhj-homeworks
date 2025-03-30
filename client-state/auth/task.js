const signInWindow = document.getElementById('signin');
const welcomeWindow = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const form = document.getElementById('signin__form');

const userId = localStorage.getItem('user_id');

if (userId) {
    welcomeWindow.classList.add('welcome_active');
    welcomeWindow.textContent = 'Добро пожаловать, пользователь: ' + userId;
    signInWindow.classList.remove('signin_active');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                const userId = response.user_id;
                localStorage.setItem('user_id', userId);
                welcomeWindow.classList.add('welcome_active');
                welcomeWindow.textContent = 'Добро пожаловать, пользователь: ' + userId;
                signInWindow.classList.remove('signin_active')
            } else {
                alert ('Неверный логин/пароль');
            }
        }
    };
    xhr.send(formData)
})




