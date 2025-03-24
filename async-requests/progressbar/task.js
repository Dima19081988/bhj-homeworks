const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputFiles = document.getElementById('file');
    const progress = document.getElementById('progress');

    if (inputFiles.files.length === 0) {
        alert ('Начните загрузку файла, пожалуйста');
        return;
    }

    const formData = new FormData();
    formData.append('file', inputFiles.files[0]);

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', function(event) {
        if (event.lengthComputable) {
            console.log(`Загружено: ${event.loaded}, Всего: ${event.total}, Процент: ${percentComplete}`);
            const percentComplete = event.loaded / event.total;
            progress.value = percentComplete;
        }
    })

    xhr.onload = function() {
        if(xhr.status >= 200 && xhr.status < 300) {
            alert('Загрузка завершена');
            progress.value = 1.0;
        } else {
            alert('Ошибка загрузки:' + xhr.status + ' - ' + xhr.statusText);
        }
    }

    xhr.onerror = function() {
        alert('Во время загрузки произошла ошибка');
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.send(formData);
})
