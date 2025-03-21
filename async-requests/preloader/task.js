const preloader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () =>{
    if(xhr.readyState === xhr.DONE) {
        preloader.classList.remove('loader_active');
        if(xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let valute = response.response.Valute;

            for (const key in valute) {
                const item = valute[key];
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');

                const codeDiv = document.createElement('div');
                codeDiv.classList.add('item__code');
                codeDiv.textContent = item.CharCode;

                const valueDiv = document.createElement('div');
                valueDiv.classList.add('item__value');
                valueDiv.textContent = item.Value.toFixed(2);

                const currencyDiv = document.createElement('div');
                currencyDiv.classList.add('item__currency');
                currencyDiv.textContent = 'руб.';

                itemDiv.appendChild(codeDiv);
                itemDiv.appendChild(valueDiv);
                itemDiv.appendChild(currencyDiv);

                itemsContainer.appendChild(itemDiv);
            }
        } else {
            console.error('Ошибка получения данных');
        }
    }
});

preloader.classList.add('loader_active');
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
